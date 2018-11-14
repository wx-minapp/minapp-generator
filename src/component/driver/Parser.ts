import * as url from 'url'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as cheerio from 'cheerio'
import * as _ from 'lodash'
import {series} from 'mora-common/util/async'
import {Config} from './Config'
import {getUrlContent, matchAll, set2array} from '../lib/utils'
import {unexpectWarn, head} from '../lib/log'
import {Meta} from '../lib/Meta'
import {Component} from '../lib/Component'

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
      cacheFilePath: this.genFile('toc.html'),
      ignoreCache
    })

    let regexp = this.config.componentLinkRegExp
    let matches = matchAll(content, regexp)
    if (!matches.length) unexpectWarn('getAllComponentLinks 获取所有组件索引页面数据异常，可能是官方更新了文档，导致正则失效')

    let linksSet = new Set<string>()

    matches.forEach(mat => {
      const linkPath = mat[1]
      const link = url.resolve(baseUrl, linkPath)
      if (!this.config.ignoredComponentLinks.includes(link)) {
        linksSet.add(link)
      }
    })

    debug(`共获取到 ${linksSet.size} 条组件页面`)
    this.meta.checkNumberUpdate(
      `${platform}.toc.pageCount`,
      linksSet.size,
      `组件索引页面有变化 "%n"（极有可能是添加了新的数据）`
    )

    return set2array(linksSet)
  }

  /** 解析单个组件页面 */
  async parseComponentLink(link: string) {

    const name = path.posix.basename(link.replace(/\/$/, '')).replace(/\.\w+$/, '')
    head(` > ${pad(name, link, 26)} `)

    const content = await getUrlContent(link, {cacheFilePath: this.genFile('.cache', name + '.html'), ignoreCache: this.ignoreCache})
    const $ = cheerio.load(content)
    const pageComponents = await this.parse($, name, link)

    return pageComponents
  }

  abstract async parse($: CheerioStatic, pageName: string, pageUrl: string): Promise<Component[]>

  async run(options: any) {
    const links = await this.getAllComponentLinks()
    const allComponents: Component[] = []
    await series(links, async link => {
      allComponents.push(...(await this.parseComponentLink(link)))
    })

    this.generatePreviewIndex(allComponents)
  }

  /** 获取缓存文件的路径 */
  genFile(...parts: string[]) {
    const file = path.join(this.config.genDir, this.platform, ...parts)
    fs.ensureDirSync(path.dirname(file))
    return file
  }

  /** 根据 res/component-index-tpl.html 生成 .preview/index.html 文件 */
  private generatePreviewIndex(components: Component[]) {
    const tplFile = path.join(this.config.resDir, 'component-index-tpl.html')
    const tplContent = fs.readFileSync(tplFile).toString()

    const previewFile = this.genFile('.preview', 'index.html')
    const previewContent = tplContent
      .replace('pageName', this.platform + ' components')
      .replace(/<!--(.*?)-->/, (raw, tpl: string) => components.map(c => tpl.replace(/componentName/g, c.name)).join('\n'))

    fs.writeFileSync(previewFile, previewContent)
  }
}

function pad(name: string, link: string, size: number) {
  let l = name.length
  let space = l < size ? ' '.repeat(size - l) : ''
  return name + space + link + space
}
