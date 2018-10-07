<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdirSync.html -->

### FileSystemManager.rmdirSync(string dirPath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.rmdir 的同步版本

#### 参数

##### string dirPath

要删除的目录路径

#### 错误

  errMsg                                      |  说明                  
----------------------------------------------|------------------------
  fail no such file or directory ${dirPath}   |  目录不存在            
  fail directory not empty                    |  目录不为空            
  fail permission denied, open ${dirPath}     |指定的 dirPath 路径没有写权限
