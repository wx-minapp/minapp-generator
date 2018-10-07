<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html -->

### FileSystemManager.saveFile(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。

#### 参数

##### Object object

  属性           |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-----------------|-------------|--------|---------|-----------------------------|---------
  tempFilePath   |  string     |        |  是     |  临时存储文件路径           |         
  filePath       |  string     |        |  否     |  要存储的文件路径           |         
  success        |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail           |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete       |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### success 回调函数

##### 参数

###### Object res

  属性            |  类型     |  说明       | 支持版本
------------------|-----------|-------------|---------
  savedFilePath   |  number   |存储后的文件路径|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                            |  说明                     
------------------------------------------------|---------------------------
  fail tempFilePath file not exist              |指定的 tempFilePath 找不到文件
  fail permission denied, open "${filePath}"    |指定的 filePath 路径没有写权限
  fail no such file or directory "${dirPath}"   |  上级目录不存在           
