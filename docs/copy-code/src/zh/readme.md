---
home: true
title: "@mr-hope/vuepress-plugin-copy-code"
icon: home
heroImage: /logo.svg
heroText: "@mr-hope/vuepress-plugin-copy-code"
tagline: 为 VuePress 提供代码块一键复制
action:
  - text: 快速上手 💡
    link: /zh/guide/

  - text: 配置 🛠
    link: /zh/config/

footer: MIT Licensed | Copyright © 2019-present Đức Thành
copyrightText: false
---

## 使用插件

### 安装

```bash
npm i -D @mr-hope/vuepress-plugin-copy-code
```

或

```bash
yarn add -D @mr-hope/vuepress-plugin-copy-code
```

### 使用

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "@mr-hope/copy-code",
      {
        // 你的选项
      },
    ],
  ],
};
```
