/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {TplModifier, TemplateMeta} from '../..'

export default class extends TplModifier {
  modify($root: Cheerio): TemplateMeta[] {
    return [
      {type: 'update', index: 1, head: {col: 0, from: '值', to: '可选值'}},
      {type: 'tableTitleUpdate', index: 1, from: '目前支持的功能页和name 有效值：', to: 'name __描述__ 目前支持的功能页和name可选值'}
    ]
  }
}
