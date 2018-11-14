import {argumentWarn, unexpectWarn} from './log'
import * as puppeteer from 'puppeteer'
import * as rp from 'request-promise'
import * as fs from 'fs-extra'
import * as path from 'path'

/**
 * 将 Set 转化成数组
 */
export function set2array<T>(set: Set<T>) {
  const arr: T[] = []
  for (const it of set.values()) {
    arr.push(it)
  }
  return arr
}

/**
 * 匹配所有出现的情况， regexp 需要带 g 的标识
 */
export function matchAll(content: string, regexp: RegExp) {
  // 确保带 g 的标识
  if (/\/\w*g\w+$/.test(regexp.toString())) {
    argumentWarn(`函数 matchAll 的第二个正则参数 regexp 必须带全局("g")的标识`)
  }

  let mat: RegExpExecArray | null
  let res: RegExpExecArray[] = []
  // tslint:disable:no-conditional-assignment
  while (mat = regexp.exec(content)) res.push(mat)
  return res
}


/**
 * 获取指定的 url 的内容
 */
export async function getUrlContent(
  url: string,
  // 默认缓存一天
  {cacheFilePath, cacheExpireMS = 86400000, ignoreCache, executeJs}: {cacheFilePath?: string, cacheExpireMS?: number, ignoreCache?: boolean, executeJs?: boolean} = {}
): Promise<string> {
  try {
    if (cacheFilePath) {
      if (!ignoreCache && fs.existsSync(cacheFilePath) && (!cacheExpireMS || fs.statSync(cacheFilePath).mtime.getTime() - Date.now() <= cacheExpireMS)) {
        return fs.readFileSync(cacheFilePath).toString()
      } else {
        const content = await rawGetUrlContent(url, executeJs)
        fs.ensureDirSync(path.dirname(cacheFilePath))
        fs.writeFileSync(cacheFilePath, content)
        return content
      }
    } else {
      return await rawGetUrlContent(url, executeJs)
    }
  } catch (e) {
    unexpectWarn(`获取链接 ${url} 的内容失败`)
    return ''
  }
}

async function rawGetUrlContent(url: string, executeJs?: boolean) {
  if (executeJs) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: 'networkidle2'})
    const html = await page.evaluate(() => {
      // @ts-ignore
      return document.documentElement.innerHTML
    })

    await browser.close()
    return html
  } else {
    return await rp(url)
  }
}
