<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.renameSync.html -->

### FileSystemManager.renameSync(string oldPath, string newPath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.rename 的同步版本

#### 参数

##### string oldPath

源文件路径，可以是普通文件或目录

##### string newPath

新文件路径

#### 错误

  errMsg                                                            |  说明                     
--------------------------------------------------------------------|---------------------------
  fail permission denied, rename ${oldPath} -> ${newPath}           |指定源文件或目标文件没有写权限
  fail no such file or directory, rename ${oldPath} -> ${newPath}   |源文件不存在，或目标文件路径的上层目录不存在
