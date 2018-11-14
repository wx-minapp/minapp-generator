import {Parser} from '../../driver/Parser'

export default class AliParser extends Parser {
  constructor() {
    super('ali')
  }
}


if (!module.parent) {
  let p = new AliParser()
  p.getAllComponentLinks()
    .then(d => console.log(d))
    .catch(e => console.log(e))
  // p.parseComponentLink('https://developers.weixin.qq.com/miniprogram/dev/component/view.html')
}
