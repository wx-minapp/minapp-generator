import {Extra} from './Extra'
import {ComponentAttrEnumItem} from './ComponentAttrEnumItem'

export class ComponentAttr {
  /** 字段描述 */
  desc: string[] = []

  /** 字段默认值 */
  defaultValue?: string

  /** 字段取值范围，有此字段 type 一般是 number */
  range?: string

  /** 是否必传 */
  required?: boolean

  /** 是否只读 */
  readonly?: boolean

  /** 兼容版本号 */
  since?: string

  /** 其它字段 */
  extras: Extra[] = []

  /** 可选值 */
  enum: ComponentAttrEnumItem[] = []

  /** 嵌套的子属性集 */
  subAttrs: Array<{equal: string, attrs: ComponentAttr[]}> = []

  constructor(public name: string, public type: string) {

  }
}
