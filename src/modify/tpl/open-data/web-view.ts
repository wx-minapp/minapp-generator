/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {TplModifier} from '../..'

export default class extends TplModifier {
  normalizeAfterLevelify() {
    let removes = [
      '相关接口 1',
      '相关接口 2',
      '相关接口 3',
      '相关接口 4',
    ]
    this.$root.find('.section').toArray().forEach(s => {
      let $s = this.$(s)
      if (removes.indexOf($s.data('title')) >= 0) $s.remove()
    })

    let $el = this.$root.find('blockquote').eq(1)
    if ($el.text().includes('客户端 6.7.2 版本开始，navigationStyle: custom')) {
      $el.remove()
    }
  }
}
