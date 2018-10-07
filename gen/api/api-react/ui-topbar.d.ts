// https://developers.weixin.qq.com/miniprogram/dev/api/ui-topbar.html

export namespace wx {
  namespace setTopBarText {
    type Param = {
      /**
       * 置顶栏文字内容
       */
      text: string
      /**
       * 接口调用成功的回调函数
       */
      success?: ParamPropSuccess
      /**
       * 接口调用失败的回调函数
       */
      fail?: ParamPropFail
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?: ParamPropComplete
    }
    /**
     * 接口调用成功的回调函数
     */
    type ParamPropSuccess = (res: any) => any
    /**
     * 接口调用失败的回调函数
     */
    type ParamPropFail = (err: any) => any
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    type ParamPropComplete = () => any
  }
  /**
   * @since 1.4.3
   *
   * 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。**注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"**
   *
   * **示例代码：**
   *
   *     ```javascript
   *     wx.setTopBarText({
   *       text: 'hello, world!'
   *     })
   *     ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui-topbar.html#wxsettopbartextobject
   */
  function setTopBarText(OBJECT: setTopBarText.Param): void

}
