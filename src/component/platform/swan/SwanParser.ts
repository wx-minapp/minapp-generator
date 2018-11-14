import {Parser} from '../../driver/Parser'

export default class SwanParser extends Parser {
  constructor() {
    super('swan')
  }

  async parse($: CheerioStatic, pageName: string, pageUrl: string) {
    return []
  }
}
