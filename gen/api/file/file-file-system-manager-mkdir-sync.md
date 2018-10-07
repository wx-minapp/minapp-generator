<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdirSync.html -->

### FileSystemManager.mkdirSync(string dirPath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.mkdir 的同步版本

#### 参数

##### string dirPath

创建的目录路径

#### 错误

  errMsg                                      |  说明                   
----------------------------------------------|-------------------------
  fail no such file or directory ${dirPath}   |  上级目录不存在         
  fail permission denied, open ${dirPath}     |指定的 filePath 路径没有写权限
  fail file already exists ${dirPath}         |  有同名文件或目录       
