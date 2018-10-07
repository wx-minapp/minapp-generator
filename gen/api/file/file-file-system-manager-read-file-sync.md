<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFileSync.html -->

### string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

FileSystemManager.readFile 的同步版本

#### 参数

##### string filePath

要读取的文件的路径

##### string encoding

指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容

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

#### 返回值

##### string|ArrayBuffer data

文件内容

#### 错误

  errMsg                                             |  说明                   
-----------------------------------------------------|-------------------------
  fail no such file or directory, open ${filePath}   |指定的 filePath 所在目录不存在
  fail permission denied, open ${dirPath}            |指定的 filePath 路径没有读权限
