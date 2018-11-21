import {Parser} from '../../driver/Parser'
import {Component} from '../../struct/Component'
import {groupHeads, countWords, outerHTML} from '../../lib/utils'
import {unexpectWarn} from '../../lib/log'
import * as createDebugger from 'debug'
import {Example} from '../../struct/Example'
import {Link} from '../../struct/Link'
import {EOL} from 'os'

const debugHeadExclude = createDebugger('minapp:head:exclude')
const debugHeadInclude = createDebugger('minapp:head:include')
const debugHeadExample = createDebugger('minapp:head:example')
const debugSince = createDebugger('minapp:since')

export default class WxParser extends Parser {
  constructor(options: Parser.Options) {
    super('wx', options)
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    const $root = $('.markdown-section')

    this.normalizePageLinks($, $root, pageUrl)

    const res = this.parseHeads($, $root, pageName)

    // 获取所有组件 及其对应的 CheerioElement
    const components: Component[] = []
    const heads: CheerioElement[] = []

    $root.find('[data-group-type="h4"]').toArray().forEach(group => {
      let $group = $(group)
      let data = $group.data()

      let name = data.groupTitle
      // 组件名一定都是小写字母，并且以 "-" 链接
      if (/^[a-z-]+$/.test(name)) {
        let id = data.groupId
        let component = new Component(name, pageUrl + '#' + id)

        // 同页面的组件共用一个 examples 和 relateApis
        component.examples = res.examples
        component.relateApis = res.relateApis
        component.since = this.parseSinceArea($, $group.children().get(0))

        components.push(component)
        heads.push(group)
      }
    })

    // 一个组件拆分成一个 html 并且可以通过最外层的 index.html 来查看(具体请查看 gen/component/[platform]/.preview/index.html)
    groupHeads($, heads).forEach(($group, i) => {
      this.generateComponentPreview(
        components[i],
        $group.html(),
        {
          prefix: '<style>[data-group-title]:before { display: block; font-size: 1.3em; margin-top: 60px; color: #b14343; content: attr(data-group-title); }</style>'
        }
      )
    })

    return components
  }


  /** 解析所有标题，将它们放到单独的一个 div 中 */
  parseHeads($: CheerioStatic, $root: Cheerio, pageName: string) {
    const EXAMPLE_HEAD_TITLES = [
      '示例代码', '示例',
      '示例代码：', '示例：',
      '示例代码：下载', '示例：下载',
      '示例代码:', '示例:'
    ]

    let heads: CheerioElement[] = []
    let exampleIndex = -1
    let root = $root.get(0)

    let relateApis: Link[] = []
    let examples: Example[] = []

    $root.find('h1,h2,h3,h4,h5,h6,strong').toArray().forEach(h => {
      if ($(h).parents('table, ul, ol').length) return // 在表格中的标题，不输出任何日志（肯定不能当 head）

      while (h.parent !== root) h = h.parent // 保证 head 是 $root 的最外层

      let $h = $(h)
      let text = $h.text().trim()

      // 一些不能排除的 head，比如：
      //    多列选择器：mode = multiSelector（最低版本：1.4.0）
      //    省市区选择器：mode = region（最低版本：1.4.0）
      let canotExclude = pageName === 'picker' && /\uFF1A\s*mode = \w+/.test(text)

      // 忽略 "太长的标签" 和 "注意： xxx" 形式的标签  ( 注 =>  \u6CE8  |   意 =>  \u610F   |   ： =>  \uFF1A ）
      if (!canotExclude && (countWords(text) >= 20 || /\u6CE8\u610F?[\d\u610F]?\uFF1A.{4}/.test(text))) {
        debugHeadExclude(text)
      } else {
        if (EXAMPLE_HEAD_TITLES.includes(text)) {
          debugHeadExample(text)
          if (exampleIndex !== -1) {
            unexpectWarn(`当前组件含有多个 “示例代码” 模块`)
          } else {
            exampleIndex = heads.length
          }
        } else {
          debugHeadInclude(text)
        }

        heads.push(h)
      }
    })

    let $groups = groupHeads($, heads, {removeHead: true})
    $groups.forEach($g => $root.append($g))

    // 处理 Example
    if (exampleIndex !== -1) {
      const res = this.parseExampleArea($, $groups[exampleIndex])
      examples.push(res.example)
      relateApis.push(...res.relateApis)
    }

    return {$groups, examples, relateApis}
  }

  /** 解析组件级别的 since 字段，并删除此字段 */
  parseSinceArea($: CheerioStatic, el: CheerioElement) {
    // 组件名称的第一个 p 标签可能是标识组件兼容信息，如：
    //     基础库 1.2.0 开始支持，低版本需做兼容处理。  (web-view)
    //     这个组件从小程序基础库版本 2.1.0 开始支持。  (functional-page-navigator)

    let $el = $(el)
    let text = $el.text().trim()
    let href = $el.find('a').attr('href')
    if (text.includes('开始支持') && href.endsWith('compatibility.html') && /(\d+\.\d+\.\d+)/.test(text)) {
      let since = RegExp.$1
      $el.remove()
      debugSince(`${since} 《${text}》`)
      return since
    }

    return
  }

  /** 解析 Example 模块，同时在解析完后把它删除 */
  parseExampleArea($: CheerioStatic, $example: Cheerio) {
    let example = new Example()
    let relateApis: Link[] = []

    $example.children().toArray().forEach(el => {
      let $el = $(el)
      switch (el.tagName) {
        case 'p':
          let text = $el.text().trim()
          let relatePrefix = '相关api：'
          if (text === '在开发者工具中预览效果') {  // 预览链接
            example.devToolPreviewLink = $el.find('a').attr('href')
          } else if (text.startsWith(relatePrefix)) { // 相关 API
            relateApis.push(new Link(text.substr(relatePrefix.length), $el.find('a').attr('href')))
          } else if ($el.children().length === 1 && $el.children().get(0).tagName === 'img') {  // 效果图
            example.screenshot = $el.find('img').attr('src')
          } else {
            unexpectWarn(`Example 中有无法解析的 p 标签：${outerHTML($, el)}`)
          }
          break
        case 'pre':
          $el = $el.find('code')

          let content = $el.text()
          let lang = ($el.attr('class') || '').replace(/^(lang|language)-/, '')

          // 将 content 中的 /* */ 结构替换成 //
          content = content.replace(/\/\*([\s\S]*?)\*\//g, (raw, c: string) => {
            return c.split(/\r?\n/).map(l => l.replace(/^(\s*)\*/, '$1//')).join(EOL)
          }).trim()

          example.codes.push({content, lang})
          break
        default:
          unexpectWarn(`Example 中有无法解析的标签：${outerHTML($, el)}`)
      }
    })

    $example.remove()

    return {example, relateApis}
  }
}
