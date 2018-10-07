<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFileSync.html -->

### number FileSystemManager.saveFileSync(string tempFilePath, string filePath)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.saveFile 的同步版本

#### 参数

##### string tempFilePath

临时存储文件路径

##### string filePath

要存储的文件路径

#### 返回值

##### number savedFilePath

存储后的文件路径

#### 错误

  errMsg                                        |  说明                     
------------------------------------------------|---------------------------
  fail tempFilePath file not exist              |指定的 tempFilePath 找不到文件
  fail permission denied, open "${filePath}"    |指定的 filePath 路径没有写权限
  fail no such file or directory "${dirPath}"   |  上级目录不存在           
