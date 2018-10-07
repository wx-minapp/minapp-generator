<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html -->

### FileSystemManager.rename(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

重命名文件，可以把文件从 oldPath 移动到 newPath

#### 参数

##### Object object

  属性       |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-------------|-------------|--------|---------|-----------------------------|---------
  oldPath    |  string     |        |  是     |源文件路径，可以是普通文件或目录|         
  newPath    |  string     |        |  是     |  新文件路径                 |         
  success    |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete   |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                                                |  说明                     
--------------------------------------------------------------------|---------------------------
  fail permission denied, rename ${oldPath} -> ${newPath}           |指定源文件或目标文件没有写权限
  fail no such file or directory, rename ${oldPath} -> ${newPath}   |源文件不存在，或目标文件路径的上层目录不存在
