<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html -->

### FileSystemManager.readdir(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

读取目录内文件列表

#### 参数

##### Object object

  属性       |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-------------|-------------|--------|---------|-----------------------------|---------
  dirPath    |  string     |        |  是     |  要读取的目录路径           |         
  success    |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete   |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### success 回调函数

##### 参数

###### Object res

  属性    |  类型             |  说明           | 支持版本
----------|-------------------|-----------------|---------
  files   |  Array.<string>   |指定目录下的文件名数组。|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                          |  说明                   
----------------------------------------------|-------------------------
  fail no such file or directory ${dirPath}   |  目录不存在             
  fail not a directory ${dirPath}             |  dirPath 不是目录       
  fail permission denied, open ${dirPath}     |指定的 filePath 路径没有读权限
