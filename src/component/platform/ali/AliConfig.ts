import {Config} from '../../driver/Config'

export default class AliConfig extends Config {
  tocLink = 'https://docs.alipay.com/mini/component/overview'

  // <a class="menu-catalog-wrap " href="component/view">View</a>
  componentLinkRegExp = /class="menu-catalog-wrap\s*"\s+href="(component\/[^"]+)"/g
}
