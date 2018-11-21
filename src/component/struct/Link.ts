export class Link {
  constructor(public name: string, public link: string) {
    if (!name || !link) {
      throw new Error(`Link 需要同时存在 name 和 link 属性： ${JSON.stringify({name, link})}`)
    }
  }
}
