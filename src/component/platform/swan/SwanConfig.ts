import {Config} from '../../driver/Config'

export default class SwanConfig extends Config {
  tocLink = 'https://smartprogram.baidu.com/docs/develop/component/view/'

  componentLinkRegExp = /class="m-doc-h2-list" href="(\/docs\/develop\/component\/[^"]+)"/g

  ignoredComponentLinks = [
    'https://smartprogram.baidu.com/docs/develop/component/native/'
  ]
}
