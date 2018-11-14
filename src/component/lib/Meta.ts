import * as Config from 'mora-scripts/libs/storage/Config'
import * as FileStorage from 'mora-scripts/libs/storage/FileStorage'
import {updateInfo} from './log'

export class Meta {
  private config: Config
  constructor(dataFile: string) {
    let storage = new FileStorage({file: dataFile, format: 2})
    this.config = new Config(storage)
  }

  value<T>(path: string, currentValue: T): {current: T, prev: T | undefined}
  value<T>(path: string, currentValue: T, defaultLastValue: T): {current: T, prev: T}
  value<T>(path: string, currentValue: T, defaultLastValue?: T) {
    let prevValue = this.config.get(path) as T | undefined
    if (typeof prevValue === 'undefined') prevValue = defaultLastValue
    this.config.set(path, currentValue)
    return {
      current: currentValue,
      prev: prevValue
    }
  }

  /** 和上次数据对比，检查是否有更新，如果有更新则输出提示信息 */
  checkNumberUpdate(path: string, currentValue: number, updateMessage: string, defaultLastValue = 0) {
    let m = this.value(path, currentValue, defaultLastValue)
    if (m.current !== m.prev && m.prev !== defaultLastValue) {
      const diff = m.current - m.prev
      updateInfo(updateMessage.replace('%n', diff > 0 ? '+' + diff : diff + ''))
    }
  }
}
