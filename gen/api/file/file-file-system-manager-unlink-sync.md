<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlinkSync.html -->

### FileSystemManager.unlinkSync(string filePath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.unlink 的同步版本

#### 参数

##### string filePath

要删除的文件路径

#### 错误

  errMsg                                             |  说明                 
-----------------------------------------------------|-----------------------
  fail permission denied, open ${path}               |指定的 path 路径没有读权限
  fail no such file or directory ${path}             |  文件不存在           
  fail operation not permitted, unlink ${filePath}   |传入的 filePath 是一个目录
