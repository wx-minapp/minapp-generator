import {Parser} from '../../driver/Parser'

export default class SwanParser extends Parser {
  constructor() {
    super('swan')
  }

}


if (!module.parent) {
  let p = new SwanParser()
  p.getAllComponentLinks()
    .then(d => console.log(d))
    .catch(e => console.log(e))
  // p.parseComponentLink('https://developers.weixin.qq.com/miniprogram/dev/component/view.html')
}
