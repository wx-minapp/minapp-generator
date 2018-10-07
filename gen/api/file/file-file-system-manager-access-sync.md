<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html -->

### FileSystemManager.accessSync(string path)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.access 的同步版本

#### 参数

##### string path

要判断是否存在的文件/目录路径

#### 错误

  errMsg                                   |  说明       
-------------------------------------------|-------------
  fail no such file or directory ${path}   |文件/目录不存在
