/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {TplModifier} from '../..'

export default class extends TplModifier {
  normalizeAfterLevelify($root: Cheerio) {
    $root.find('[data-title="错误码信息与解决方案表"]').remove()
  }
}
