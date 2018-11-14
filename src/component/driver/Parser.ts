import * as url from 'url'
import * as path from 'path'
import * as _ from 'lodash'
import {Config} from './Config'
import {getUrlContent, matchAll} from '../lib/utils'
import {unexpectWarn} from '../lib/log'
import {Meta} from '../lib/Meta'

const debug = require('debug')('minapp:parser')

export abstract class Parser {
  config: Config
  meta: Meta

  /** 是否忽略文件缓存（只用于要强制更新文档的时候才设置） */
  ignoreCache = false

  constructor(public platform: 'ali' | 'swan' | 'wx') {
    let configFile = `../platform/${platform}/${_.capitalize(platform)}Config`
    debug(`加载配置文件 ${configFile}`)
    let Ctor = require(configFile).default
    this.config = new Ctor()

    let metaFile = path.join(this.config.genDir, 'meta.json')
    debug(`加载 meta 信息文件 ${metaFile}`)
    this.meta = new Meta(metaFile)
  }

  /** 获取所有组件页面 */
  async getAllComponentLinks() {
    const {config, platform, ignoreCache} = this

    const baseUrl = config.tocLink
    debug(`解析组件索引页面 ${baseUrl}`)
    const content = await getUrlContent(baseUrl, {
      executeJs: platform === 'ali', // 阿里小程序页面是通过 js 生成的
      cacheFilePath: this.getCacheFile('toc.html'),
      ignoreCache
    })

    let regexp = this.config.componentLinkRegExp
    let matches = matchAll(content, regexp)
    if (!matches.length) unexpectWarn('getAllComponentLinks 获取所有组件索引页面数据异常，可能是官方更新了文档，导致正则失效')

    let links = new Set<string>()

    matches.forEach(mat => {
      const linkPath = mat[1]
      const link = url.resolve(baseUrl, linkPath)
      if (!this.config.ignoredComponentLinks.includes(link)) {
        links.add(link)
      }
    })

    debug(`共获取到 ${links.size} 条组件页面`)
    this.meta.checkNumberUpdate(`${platform}.tocSize`, links.size, `组件索引页面有变化 "%n"（极有可能是添加了新的数据）`)

    return links
  }

  /** 获取缓存文件的路径 */
  private getCacheFile(...parts: string[]) {
    return path.join(this.config.genDir, this.platform, ...parts)
  }
}
