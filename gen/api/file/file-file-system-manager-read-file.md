<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html -->

### FileSystemManager.readFile(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

读取本地文件内容

#### 参数

##### Object object

  属性       |  类型       | 默认值 | 是否必填|  说明                                                    | 支持版本
-------------|-------------|--------|---------|----------------------------------------------------------|---------
  filePath   |  string     |        |  是     |  要读取的文件的路径                                      |         
  encoding   |  string     |        |  否     |指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容|         
  success    |  function   |        |  否     |  接口调用成功的回调函数                                  |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数                                  |         
  complete   |  function   |        |  否     |  接口调用结束的回调函数（调用成功、失败都会执行）        |         

**object.encoding 的合法值**

  值                            |  说明     
--------------------------------|-----------
  ascii                         |           
  base64                        |           
  binary                        |           
  hex                           |           
  ucs2/ucs-2/utf16le/utf-16le   |以小端序读取
  utf-8/utf8                    |           
  latin1                        |           

#### success 回调函数

##### 参数

###### Object res

  属性   |  类型                 |  说明   | 支持版本
---------|-----------------------|---------|---------
  data   |  string/ArrayBuffer   | 文件内容|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                                 |  说明                   
-----------------------------------------------------|-------------------------
  fail no such file or directory, open ${filePath}   |指定的 filePath 所在目录不存在
  fail permission denied, open ${dirPath}            |指定的 filePath 路径没有读权限
