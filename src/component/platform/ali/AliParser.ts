import {Parser} from '../../driver/Parser'

export default class AliParser extends Parser {
  constructor() {
    super('ali')
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    return []
  }
}
