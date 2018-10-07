<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.statSync.html -->

### Stats FileSystemManager.statSync(string path)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.stat 的同步版本

#### 参数

##### string path

文件/目录路径

#### 返回值

##### [Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html) stat

一个 Stats 对象

#### 错误

  errMsg                                   |  说明               
-------------------------------------------|---------------------
  fail permission denied, open ${path}     |指定的 path 路径没有读权限
  fail no such file or directory ${path}   |  文件不存在         
