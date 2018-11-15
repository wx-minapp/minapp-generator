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

export namespace Parser {
  export interface Options {
    /** 需要解析 pageName，不指定则会解析所有的 pageName */
    includePageNames?: string[]

    /** 忽略 page 页面的缓存（索引页面的缓存不受此影响） */
    ignorePageCache?: boolean
  }
}

export abstract class Parser {
  config: Config
  meta: Meta

  constructor(public platform: 'ali' | 'swan' | 'wx', public options: Parser.Options) {
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
    const {config, platform} = this

    const baseUrl = config.tocLink
    debug(`解析组件索引页面 ${baseUrl}`)
    const content = await getUrlContent(baseUrl, {cacheFilePath: this.genFile('toc.html'), executeJs: true})

    let regexp = this.config.componentLinkRegExp
    let matches = matchAll(content, regexp)
    if (!matches.length) unexpectWarn('getAllComponentLinks 获取所有组件索引页面数据异常，可能是官方更新了文档，导致正则失效')

    let linksSet = new Set<string>()

    matches.forEach(mat => {
      let linkPath = mat[1]
      // ali 的链接是通过 js 控制的，多了一个 component/
      if (platform === 'ali') linkPath = linkPath.replace(/^component\//, '')
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
    const {includePageNames} = this.options

    const pageName = path.posix.basename(link.replace(/\/$/, '')).replace(/\.\w+$/, '')

    // 不在 includePageNames 中的 page 不需要解析
    if (includePageNames && includePageNames.length && !includePageNames.includes(pageName)) {
      return []
    }

    head(` > ${pad(pageName, link, 26)} `)

    const content = await getUrlContent(link, {
      cacheFilePath: this.genFile('.cache', pageName + '.html'),
      ignoreCache: this.options.ignorePageCache,
      executeJs: true // 避免和在页面上看到的不一样，统一执行 js （这样速度可能会变慢，但好在有缓存）
    })
    const $ = cheerio.load(content)
    const pageComponents = await this.parse($, pageName, link)

    this.checkPageComponentUpdates(pageName, pageComponents)
    return pageComponents
  }

  abstract async parse($: CheerioStatic, pageName: string, pageUrl: string): Promise<Component[]>

  async run() {
    const links = await this.getAllComponentLinks()

    const allComponents: Component[] = []
    await series(links, async link => {
      allComponents.push(...(await this.parseComponentLink(link)))
    })

    this.generateComponentIndexPreview(allComponents)
  }

  /** 获取缓存文件的路径 */
  genFile(...parts: string[]) {
    const file = path.join(this.config.genDir, this.platform, ...parts)
    fs.ensureDirSync(path.dirname(file))
    return file
  }

  /** 处理 html 中的链接（使用绝对链接） */
  normalizePageLinks($: CheerioStatic, $root: Cheerio, pageUrl: string) {
    let timeReg = /\?t=\d+/
    let trimRandomTime = (str: string) => str.replace(timeReg, '')

    // 所有 image[src] 和 a[href] 要做下面的处理
    // 1. 去除 ?t=20160203 这样的参数
    // 2. 使用绝对路径
    const selectors = ['a[href]', 'img[src]']
    selectors.forEach(selector => {
      $root.find(selector).toArray().forEach(tag => {
        /\[(\w+)\]/.test(selector)
        const attr = RegExp.$1
        const $tag = $(tag)
        const oldurl = $tag.attr(attr)
        const newurl = trimRandomTime(url.resolve(pageUrl, oldurl))
        if (newurl !== oldurl) {
          $tag.attr(attr, newurl)
        }
      })
    })
  }

  /** 检查页面中组件是否变化，方便提示开发注意文档变化 */
  private checkPageComponentUpdates(pageName: string, pageComponents: Component[]) {
    // 检查页面中组件数量是否变化了（不排除官方更新文档，用 h4 标识了一些非组件的字段）
    this.meta.checkDataUpdate(
      `${this.platform}.components.${pageName}`,
      pageComponents.map(c => c.name),
      `页面 ${pageName} 中的组件有变化：%s`,
      []
    )
  }

  /** 生成单个组件的预览页面 */
  generateComponentPreview(component: Component, content: string | null) {
    fs.writeFileSync(this.genFile('.preview', component.name + '.html'), content || '')
  }

  /** 根据 res/component-index-tpl.html 生成 .preview/index.html 文件 */
  private generateComponentIndexPreview(allPageComponents: Component[]) {
    const tplFile = path.join(this.config.resDir, 'component-index-tpl.html')
    const tplContent = fs.readFileSync(tplFile).toString()

    const previewFile = this.genFile('.preview', 'index.html')
    const previewContent = tplContent
      .replace('pageName', this.platform + ' components')
      .replace(/<!--(.*?)-->/, (raw, tpl: string) => allPageComponents.map(c => tpl.replace(/componentName/g, c.name)).join('\n'))

    fs.writeFileSync(previewFile, previewContent)
  }
}

function pad(name: string, link: string, size: number) {
  let l = name.length
  let space = l < size ? ' '.repeat(size - l) : ''
  return name + space + link + space
}
