// https://developers.weixin.qq.com/miniprogram/dev/api/api-live-pusher.html

export namespace wx {
  /**
   * @since 1.7.0
   *
   * 创建并返回 `live-pusher` 上下文 `LivePusherContext` 对象，`LivePusherContext` 与页面的 `<live-pusher />` 组件绑定，一个页面只能有一个 `live-pusher`，通过它可以操作对应的 `<live-pusher/>` 组件。 在自定义组件下，第一个参数传入组件实例this，以操作组件内 `<live-pusher/>` 组件
   *
   * **示例代码：**
   *
   * [在开发者工具中预览效果](wechatide://minicode/KvWD9mmA62Yk "在开发者工具中预览效果")
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/api-live-pusher.html#wxcreatelivepushercontext
   */
  function createLivePusherContext(): LivePusherContext

  namespace LivePusherContext {
    namespace start {
      type Param = {
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
    namespace stop {
      type Param = {
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
    namespace pause {
      type Param = {
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
    namespace resume {
      type Param = {
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
    namespace switchCamera {
      type Param = {
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
    namespace snapshot {
      type Param = {
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
    namespace toggleTorch {
      type Param = {
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
  }
  class LivePusherContext {
    /**
     * 播放推流
     */
    start(OBJECT: LivePusherContext.start.Param): any
    /**
     * 停止推流
     */
    stop(OBJECT: LivePusherContext.stop.Param): any
    /**
     * 暂停推流
     */
    pause(OBJECT: LivePusherContext.pause.Param): any
    /**
     * 恢复推流
     */
    resume(OBJECT: LivePusherContext.resume.Param): any
    /**
     * 切换前后摄像头
     */
    switchCamera(OBJECT: LivePusherContext.switchCamera.Param): any
    /**
     * 快照
     *
     * @since 1.9.90
     */
    snapshot(OBJECT: LivePusherContext.snapshot.Param): any
    /**
     * 切换闪光灯
     *
     * @since 2.1.0
     */
    toggleTorch(OBJECT: LivePusherContext.toggleTorch.Param): any
  }
}
