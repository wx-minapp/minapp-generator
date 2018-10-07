<!-- https://developers.weixin.qq.com/miniprogram/dev/api/ui.html -->

### wx.setNavigationBarTitle(OBJECT)

动态设置当前页面的标题。

**OBJECT参数说明：**

  参数       |  类型       |  必填 |  说明                       
-------------|-------------|-------|-----------------------------
  title      |  String     |  是   |  页面标题                   
  success    |  Function   |  否   |  接口调用成功的回调函数     
  fail       |  Function   |  否   |  接口调用失败的回调函数     
  complete   |  Function   |  否   |接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    

### wx.showNavigationBarLoading()

在当前页面显示导航条加载动画。

### wx.hideNavigationBarLoading()

隐藏导航条加载动画。
