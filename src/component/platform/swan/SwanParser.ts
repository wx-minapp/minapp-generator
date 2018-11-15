import {Parser} from '../../driver/Parser'
// import {Component} from '../../lib/Component'

export default class SwanParser extends Parser {
  constructor(options: Parser.Options) {
    super('swan', options)
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    const $root = $('.article-inner')
    this.normalizePageLinks($, $root, pageUrl)

    const $groups = $root.find('.m-doc-content-item')
    // const components: Component[] = []

    console.log($groups.length)
    $groups.each((i, group) => {
      // const $group = $(group)
    })

    return []
  }
}
