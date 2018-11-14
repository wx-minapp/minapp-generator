export class Example {
  /** 代码片段 */
  codes: Array<{content: string, lang: string, title?: string}> = []

  /** 代码片段的图片效果 */
  screenshot?: string

  /** 在开发者工具中预览的 URL 链接 */
  devToolPreviewLink?: string

  /** 在手机上预览的 二维码图片链接（阿里小程序给的是预览二维码，扫码即可在手机上体验） */
  mobilePreviewQRCode?: string
}
