<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFileSync.html -->

### FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.appendFile 的同步版本

#### 参数

##### string filePath

要追加内容的文件路径

##### string|ArrayBuffer data

要追加的文本或二进制数据

##### string encoding

指定写入文件的字符编码

**encoding 的合法值**

  值                            |  说明     
--------------------------------|-----------
  ascii                         |           
  base64                        |           
  binary                        |           
  hex                           |           
  ucs2/ucs-2/utf16le/utf-16le   |以小端序读取
  utf-8/utf8                    |           
  latin1                        |           

#### 错误

  errMsg                                                      |  说明                      
--------------------------------------------------------------|----------------------------
  fail no such file or directory, open ${filePath}            | 指定的 filePath 文件不存在 
  fail illegal operation on a directory, open "${filePath}"   |指定的 filePath 是一个已经存在的目录
  fail permission denied, open ${dirPath}                     |指定的 filePath 路径没有写权限
  fail sdcard not mounted                                     |指定的 filePath 是一个已经存在的目录
