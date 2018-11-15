import {Parser} from '../../driver/Parser'
// import {groupHeads} from '../../lib/utils'

export default class AliParser extends Parser {
  constructor(options: Parser.Options) {
    super('ali', options)
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    const $root = $('.markdown')
    this.normalizePageLinks($, $root, pageUrl)

    // const components: Component[] = []
    // const heads: CheerioElement[] = []
    $root.find('[id]').toArray().forEach(el => {
      console.log(el.tagName, $(el).text())
    })

    // const heads = $root.find('h3[id]').toArray()
    // const $groups = groupHeads($, heads)

    // $groups.forEach(($group, i) => {
    //   console.log($group.find('h3').attr('id'))
    // })
    return []
  }
}
