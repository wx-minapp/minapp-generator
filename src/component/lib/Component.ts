import {Example} from './Example'
import {ComponentAttr} from './ComponentAttr'

export class Component {
  /** 组件名称 */
  name: string

  /** 官方文档地址 */
  docLink: string

  /** 兼容的小程序版本号 */
  since?: string

  // 下面两个字段的信息转移到 desc 中
  /** 需要用户预先授权 */
  // authorize?: ComponentLink
  /** 相关 api */
  // relateApis: ComponentLink[] = []

  /** 描述信息 */
  desc: string[] = []

  /** 组件支持的属性 */
  attrs: ComponentAttr[] = []

  /** 注意事项 */
  notices: string[] = []

  /** 提醒 */
  tips: string[] = []

  /** 已知 bug */
  bugs: string[] = []

  /** 示例代码 */
  examples: Example[] = []

  constructor(name: string, docLink: string) {
    this.name = name
    this.docLink = docLink
  }
}
