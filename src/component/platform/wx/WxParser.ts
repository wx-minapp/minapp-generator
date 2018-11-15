import {Parser} from '../../driver/Parser'
import {Component} from '../../lib/Component'
import {groupHeads} from '../../lib/utils'

export default class WxParser extends Parser {
  constructor(options: Parser.Options) {
    super('wx', options)
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    const $root = $('.markdown-section')

    this.normalizePageLinks($, $root, pageUrl)

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

    // 一个组件拆分成一个 html 并且可以通过最外层的 index.html 来查看(具体请查看 gen/component/[platform]/.preview/index.html)
    const $groups = groupHeads($, heads)
    $groups.forEach(($group, i) => {
      this.generateComponentPreview(components[i], $group.html())
    })

    return components
  }
}
