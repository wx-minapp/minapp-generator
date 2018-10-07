<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html -->

### FileSystemManager.getFileInfo(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

获取该小程序下的 本地临时文件 或 本地缓存文件 信息

#### 参数

##### Object object

  属性       |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-------------|-------------|--------|---------|-----------------------------|---------
  filePath   |  string     |        |  是     |  要读取的文件路径           |         
  success    |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete   |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### success 回调函数

##### 参数

###### Object res

  属性   |  类型     |  说明          | 支持版本
---------|-----------|----------------|---------
  size   |  number   |文件大小，以字节为单位|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                    |  说明                 
------------------------|-----------------------
  fail file not exist   |指定的 filePath 找不到文件
