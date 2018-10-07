<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html -->

### FileSystemManager.getSavedFileList(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

获取该小程序下已保存的本地缓存文件列表

#### 参数

##### object

  属性       |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-------------|-------------|--------|---------|-----------------------------|---------
  success    |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete   |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### success 回调函数

##### 参数

###### Object res

  属性       |  类型     |  说明                   | 支持版本
-------------|-----------|-------------------------|---------
  fileList   |  Object   |文件数组，每一项是一个 FileItem|         

**res.fileList 的结构**

  属性         |  类型     |  说明            | 支持版本
---------------|-----------|------------------|---------
  filePath     |  string   |  本地路径        |         
  size         |  number   |本地文件大小，以字节为单位|         
  createTime   |  number   |  文件创建时间    |         
