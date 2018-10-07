<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unzip.html -->

### FileSystemManager.unzip(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

解压文件

#### 参数

##### Object object

  属性          |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
----------------|-------------|--------|---------|-----------------------------|---------
  zipFilePath   |  string     |        |  是     |源文件路径，只可以是 zip 压缩文件|         
  targetPath    |  string     |        |  是     |  目标目录路径               |         
  success       |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail          |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete      |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                                                     |  说明                     
-------------------------------------------------------------------------|---------------------------
  fail permission denied, unzip ${zipFilePath} -> ${destPath}            | 指定目标文件路径没有写权限
  fail no such file or directory, unzip ${zipFilePath} -> "${destPath}   |源文件不存在，或目标文件路径的上层目录不存在
