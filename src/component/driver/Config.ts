import {ROOT} from '../lib/constants'
import * as path from 'path'

export abstract class Config {

  /** 用于获取所有组件索引的链接 */
  abstract tocLink: string

  /** 匹配 component link 的正则 */
  abstract componentLinkRegExp: RegExp

  /**
   * 需要忽略的 tocLink
   *
   * 这些链接不需要解析，因为不含有任何组件
   */
  ignoredComponentLinks: string[] = []

  /** 用于存储生成的文件的根目录 */
  genDir = path.join(ROOT, 'gen', 'component')
}
