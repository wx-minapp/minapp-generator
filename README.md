## 微信官方文档解析器，同时生成解析后的结构化的文件

可以生成 `wx.d.ts`、 `wxp.d.ts` 和 `component.json`，主要用于 minapp 框架




## 开发

1. 添加系统的环境变量（中国用户最好配置，否则 `npm install` 时会下载 puppeteer，此过程会很慢）

```bash
export PUPPETEER_DOWNLOAD_HOST="https://cnpmjs.org/mirrors"
```

2. 全局安装 `carbon-now-cli`（用于生成代码的图片形式，另外使用 `carbon-now-cli` 命令的时候需要翻墙！）

```bash
npm i -g carbon-now-cli
```

3. 安装依赖

```bash
npm install
```
