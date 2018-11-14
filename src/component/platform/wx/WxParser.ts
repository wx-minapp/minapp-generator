import {Parser} from '../../driver/Parser'
import * as url from 'url'
import * as fs from 'fs-extra'
import {Component} from '../../lib/Component'
// import {matchAll, getUrlContent} from '../../lib/utils'
// import {WxConfig} from './WxConfig'
// import {unexpectWarn} from '../../lib/log'
// import * as path from 'path'
// import * as cheerio from 'cheerio'

export default class WxParser extends Parser {
  constructor() {
    super('wx')
  }

  // /** 解析单个组件页面 */
  // async parseComponentLink(link: string) {
  //   const $ = cheerio.load(content)
  //   const $root = $('.markdown-section')
  //   // hook $root
  //   console.log($root.html())
  // }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    const $root = $('.markdown-section')
    this.normalize($, $root, pageUrl)


    // 获取所有组件 及其对应的 CheerioElement
    const components: Component[] = []
    const heads: CheerioElement[] = []
    $root.find('h4').toArray().forEach(h => {
      let $head = $(h)
      let name = $head.text()
      // 组件名一定都是小写字母，并且以 "-" 链接
      if (/^[a-z-]+$/.test(name)) {
        let id = $head.attr('id')
        let component = new Component(name, pageUrl + '#' + id)
        components.push(component)
        heads.push(h)
      }
    })


    // 检查页面中组件数量是否变化了（不排除官方更新文档，用 h4 标识了一些非组件的字段）
    this.meta.checkDataUpdate(
      `${this.platform}.components.${pageName}`,
      components.map(c => c.name),
      `页面 ${pageName} 中的组件有变化：%s`,
      []
    )

    // 一个组件拆分成一个 html 并且可以通过最外层的 index.html 来查看(具体请查看 gen/component/[platform]/.preview/index.html)
    this.component2html($, $root, components, heads)

    return components
  }

  private component2html($: CheerioStatic, $root: Cheerio, components: Component[], heads: CheerioElement[]) {
    const $groups = heads.map(h => $('<div class="component"></div>'))
    const len = heads.length
    if (!len) return

    for (let i = 0; i < len; i++) {
      let head = heads[i]
      let el = head
      while (el && (i + 1 >= len || el !== heads[i + 1])) {
        const tmp = el
        el = el.nextSibling
        $groups[i].append(tmp)
      }
    }

    $groups.forEach(($g, i) => {
      $root.append($g)
      fs.writeFileSync(this.genFile('.preview', components[i].name + '.html'), $g.html() || '')
    })
  }


  private normalize($: CheerioStatic, $root: Cheerio, pageUrl: string) {
    let timeReg = /\?t=\d+/
    let trimRandomTime = (str: string) => str.replace(timeReg, '')

    // 所有 image[src] 和 a[href] 要做下面的处理
    // 1. 去除 ?t=20160203 这样的参数
    // 2. 使用绝对路径
    const selectors = ['a[href]', 'img[src]']
    selectors.forEach(selector => {
      $root.find(selector).toArray().forEach(tag => {
        /\[(\w+)\]/.test(selector)
        const attr = RegExp.$1
        const $tag = $(tag)
        const oldurl = $tag.attr(attr)
        const newurl = trimRandomTime(url.resolve(pageUrl, oldurl))
        if (newurl !== oldurl) {
          $tag.attr(attr, newurl)
        }
      })
    })
  }
}
