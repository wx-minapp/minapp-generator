import {Config} from '../../driver/Config'

export default class WxConfig extends Config {
  tocLink = 'https://developers.weixin.qq.com/miniprogram/dev/component/'

  // li class="chapter" data-level="1.3.8.1" data-path=./open-data.html data-name="open-data"
  componentLinkRegExp = /<li class="[^"]*" data-level="[^"]*" data-path="?([^" ]*)"? data-name="[^"]*">/g
}
