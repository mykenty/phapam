---
home: true
title: vuepress-plugin-comment
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-comment
tagline: Comment and visitors plugin for vuepress
action:
  - text: Get Started 💡
    link: /guide/

  - text: Config 🛠
    link: /config/

footer: MIT Licensed | Copyright © 2019-present Đức Thành
copyrightText: false
---

## Install

```bash
npm i -D @mr-hope/vuepress-plugin-comment
```

Or

```bash
yarn add -D @mr-hope/vuepress-plugin-comment
```

### Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "@mr-hope/comment",
      {
        // your options
      },
    ],
  ],
};
```
