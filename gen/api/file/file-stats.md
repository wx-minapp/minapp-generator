<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html -->

### Stats

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

描述文件状态的对象

#### 属性

##### string mode

文件的类型和存取的权限，对应 POSIX stat.st_mode

##### number size

文件大小，单位：B，对应 POSIX stat.st_size

##### number lastAccessedTime

文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime

##### number lastModifiedTime

文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime

#### 方法

##### [boolean Stats.isDirectory()](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html)

判断当前文件是否一个目录

##### [boolean Stats.isFile()](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html)

判断当前文件是否一个普通文件
