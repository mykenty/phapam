---
home: true
title: vuepress-plugin-add-this
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-add-this
tagline: AddThis plugin for vuepress
action:
  - text: Guide 💡
    link: /guide/

  - text: Config 🛠
    link: /config/

footer: MIT Licensed | Copyright © 2019-present Đức Thành
copyrightText: false
---

## How to use

### Install

```bash
npm i -D vuepress-plugin-add-this
```

Or

```bash
yarn add -D vuepress-plugin-add-this
```

### Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [["add-this", { pubid: "your pubid" }]],
};
```
