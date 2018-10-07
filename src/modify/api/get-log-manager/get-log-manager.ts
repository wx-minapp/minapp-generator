/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {ApiModifier} from '../..'

export default class extends ApiModifier {
  normalize($root: Cheerio) {
    super.normalize($root)
    $root.find('table').eq(0).find('tbody tr').each((i, el) => {
      let td = this.$(el).find('td').eq(1)
      this.assert(td.html() === 'p1 [, p2, ..., pN]')
      td.text('...args: any[]')
    })

  }
}
