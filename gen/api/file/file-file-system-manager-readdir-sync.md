<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdirSync.html -->

### Array.<string> FileSystemManager.readdirSync(string dirPath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.readdir 的同步版本

#### 参数

##### string dirPath

要读取的目录路径

#### 返回值

##### Array.<string> files

指定目录下的文件名数组。

#### 错误

  errMsg                                      |  说明                   
----------------------------------------------|-------------------------
  fail no such file or directory ${dirPath}   |  目录不存在             
  fail not a directory ${dirPath}             |  dirPath 不是目录       
  fail permission denied, open ${dirPath}     |指定的 filePath 路径没有读权限
