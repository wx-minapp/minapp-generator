import * as xlog from 'mora-scripts/libs/sys/xlog'

function warn(type: string, message: string) {
  xlog(`%c ${type} %c %c${message}`, 'bg.h.yellow.fg.bold.black', 'reset', 'yellow')
}

function info(type: string, message: string) {
  xlog(`%c ${type} %c %c${message}`, 'bg.h.cyan.fg.bold.black', 'reset', 'cyan')
}


/** 函数参数有问题（不合规范） */
export function argumentWarn(message: string) {
  warn('Argument Warn', message)
}

/** 和预期结果不符的警告 */
export function unexpectWarn(message: string) {
  warn('Unexpect Warn', message)
}

/** 有数据更新时调用 */
export function updateInfo(message: string) {
  info('Update Info', message)
}


// for self test
if (!module.parent) {
  argumentWarn('函数 xxx 的参数 yyy 有问题，应该为 foo bar')
  unexpectWarn('函数 xxx 应该返回 ... 但它返回了 ...')
  console.log('另起一行')
}
