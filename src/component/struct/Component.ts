import {Example} from './Example'
import {ComponentAttr} from './ComponentAttr'
import {Link} from './Link'
import {Extra} from './Extra'

export class Component {
  /** 组件名称 */
  name: string

  /** 官方文档地址 */
  docLink: string

  /** 兼容的小程序版本号 */
  since?: string

  /** 相关 api */
  relateApis: Link[] = []

  /** 描述信息 (markdown) */
  desc: string[] = []

  /** 额外的字段（对 desc 的补充，其中 content 是 markdown） */
  extras: Extra[] = []

  /** 组件支持的属性 */
  attrs: ComponentAttr[] = []

  /** 示例代码 */
  examples: Example[] = []

  constructor(name: string, docLink: string) {
    this.name = name
    this.docLink = docLink
  }
}
