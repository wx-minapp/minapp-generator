#!/usr/bin/env node

import {series} from 'mora-common/util/async'
import * as cli from 'mora-scripts/libs/tty/cli'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as _ from 'lodash'

const platformDir = path.join(__dirname, 'platform')
const supportPlatforms = fs.readdirSync(platformDir).filter(name => fs.statSync(path.join(platformDir, name)).isDirectory())

cli({
  usage: 'minapp-component [options]',
  desc: '自动获取微信/百度/支付宝的小程序组件数据',
  version: require('../../package.json').version
}).options({
  'p | platform': '<array> 指定小程序平台，可以指定多个，不指定会获取所有平台数据'
}).parse(function(res) {
  const {platform} = (res as any) as ({platform: string[]})
  const platforms = !platform || platform.length === 0 ? supportPlatforms : platform.filter(p => supportPlatforms.includes(p))

  series(platforms, async (p) => {
    const parserFile = path.join(platformDir, p, _.capitalize(p) + 'Parser')
    const Parser = require(parserFile).default
    const parser = new Parser()
    await parser.run(res)
  })
})
