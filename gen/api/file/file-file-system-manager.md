<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html -->

### FileSystemManager

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

文件管理器

#### 方法

##### [FileSystemManager.access(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html)

判断文件/目录是否存在

##### [FileSystemManager.appendFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html)

在文件结尾追加内容

##### [FileSystemManager.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html)

保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。

##### [FileSystemManager.getSavedFileList()](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html)

获取该小程序下已保存的本地缓存文件列表

##### [FileSystemManager.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.removeSavedFile.html)

删除该小程序下已保存的本地缓存文件

##### [FileSystemManager.copyFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html)

复制文件

##### [FileSystemManager.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html)

获取该小程序下的 本地临时文件 或 本地缓存文件 信息

##### [FileSystemManager.mkdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html)

创建目录

##### [FileSystemManager.readdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html)

读取目录内文件列表

##### [FileSystemManager.readFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html)

读取本地文件内容

##### [FileSystemManager.rename(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html)

重命名文件，可以把文件从 oldPath 移动到 newPath

##### [FileSystemManager.rmdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html)

删除目录

##### [Stats FileSystemManager.stat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.stat.html)

获取文件 Stats 对象

##### [FileSystemManager.unlink(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html)

删除文件

##### [FileSystemManager.unzip(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unzip.html)

解压文件

##### [FileSystemManager.writeFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html)

写文件
