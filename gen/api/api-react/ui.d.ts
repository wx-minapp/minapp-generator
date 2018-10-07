// https://developers.weixin.qq.com/miniprogram/dev/api/ui.html

export namespace wx {
  namespace setNavigationBarTitle {
    type Param = {
      /**
       * 页面标题
       */
      title: string
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
   * 动态设置当前页面的标题。
   *
   * **示例代码：**
   *
   *     ```javascript
   *     wx.setNavigationBarTitle({
   *       title: '当前页面'
   *     })
   *     ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui.html#wxsetnavigationbartitleobject
   */
  function setNavigationBarTitle(OBJECT: setNavigationBarTitle.Param): void

  /**
   * 在当前页面显示导航条加载动画。
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui.html#wxshownavigationbarloading
   */
  function showNavigationBarLoading(): void

  /**
   * 隐藏导航条加载动画。
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui.html#wxhidenavigationbarloading
   */
  function hideNavigationBarLoading(): void

}
