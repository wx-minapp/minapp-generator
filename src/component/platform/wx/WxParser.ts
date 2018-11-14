import {Parser} from '../../driver/Parser'
// import {matchAll, getUrlContent} from '../../lib/utils'
// import {WxConfig} from './WxConfig'
// import {unexpectWarn} from '../../lib/log'
// import * as url from 'url'
// import * as path from 'path'
// import * as cheerio from 'cheerio'

export default class WxParser extends Parser {
  constructor() {
    super('wx')
  }

  // /** 解析单个组件页面 */
  // async parseComponentLink(link: string) {
  //   const cacheName = link.replace(WxConfig.baseUrl, '')
  //   const cacheFile = path.join(WxConfig.genDir, '.cache', cacheName)

  //   const content = await getUrlContent(link, cacheFile, false)
  //   // hook content

  //   const $ = cheerio.load(content)
  //   const $root = $('.markdown-section')
  //   // hook $root

  //   console.log($root.html())
  // }

}

if (!module.parent) {
  let p = new WxParser()
  p.getAllComponentLinks()
    .then(d => console.log(d))
    .catch(e => console.log(e))
  // p.parseComponentLink('https://developers.weixin.qq.com/miniprogram/dev/component/view.html')
}
