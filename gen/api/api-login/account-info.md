<!-- https://developers.weixin.qq.com/miniprogram/dev/api/account-info.html -->

### wx.getAccountInfoSync()

> 基础库 2.2.2 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

访问当前小程序或插件帐号信息。

**返回值：**

  参数          |  类型     |  说明                    
----------------|-----------|--------------------------
  miniProgram   |  Object   |  小程序帐号信息          
  plugin        |  Object   |插件帐号信息（仅在插件中调用时包含这一项）

其中， `miniProgram` 包含以下字段：

  参数    |  类型     |  说明        
----------|-----------|--------------
  appId   |  String   | 小程序 appId 

`plugin` 仅当在插件中调用时提供，它包含以下字段：

  参数      |  类型     |  说明       
------------|-----------|-------------
  appId     |  String   |  插件 appId 
  version   |  String   |  插件版本号 

**示例代码：**

    var accountInfo = wx.getAccountInfoSync();
    accountInfo.miniProgram.appId // 小程序 appId
    accountInfo.plugin.appId // 插件 appId
    accountInfo.plugin.version // 插件版本号， 'a.b.c' 这样的形式
