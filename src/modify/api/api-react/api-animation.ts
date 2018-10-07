/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {ApiModifier} from '../..'

export default class extends ApiModifier {
  modify($root: Cheerio) {
    let $target = $root.find('#animation')
    $target.next().remove()

    $target.nextAll('p').each((i, p) => {
      let $p = this.$(p)
      $p.html(`<strong>animation ${$p.text()}:</strong>`)
    })

    $target.remove()

    $root.find('table tbody').eq(2).append('<tr><td>export</td><td></td><td>导出动画数据传递给组件的animation属性</td></tr>')
  }
}
