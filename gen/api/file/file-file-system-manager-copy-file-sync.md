<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFileSync.html -->

### FileSystemManager.copyFileSync(string srcPath, string destPath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.copyFile 的同步版本

#### 参数

##### string srcPath

源文件路径，只可以是普通文件

##### string destPath

目标文件路径

#### 错误

  errMsg                                                               |  说明                     
-----------------------------------------------------------------------|---------------------------
  fail permission denied, copyFile ${srcPath} -> ${destPath}           | 指定目标文件路径没有写权限
  fail no such file or directory, copyFile ${srcPath} -> ${destPath}   |源文件不存在，或目标文件路径的上层目录不存在
