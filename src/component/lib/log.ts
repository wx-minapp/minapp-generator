import * as xlog from 'mora-scripts/libs/sys/xlog'

function warn(type: string, message: string) {
  xlog(`%c ${type} %c %c${message}`, 'bg.h.yellow.fg.bold.black', 'reset', 'yellow')
}

function info(type: string, message: string) {
  xlog(`%c ${type} %c %c${message}`, 'bg.h.cyan.fg.bold.black', 'reset', 'cyan')
}

export function head(message: string) {
  xlog(`\n%c${message}`, 'bg.white.fg.black')
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

/** 基本信息 */
export function basicInfo(message: string) {
  info('Basic Info', message)
}
