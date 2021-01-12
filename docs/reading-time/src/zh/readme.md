---
home: true
title: "@mr-hope/vuepress-plugin-reading-time"
icon: home
heroImage: /logo.svg
heroText: "@mr-hope/vuepress-plugin-reading-time"
tagline: 字数与阅读时间统计
footer: MIT Licensed | Copyright © 2019-present Đức Thành
copyrightText: false
---

阅读时间与字数统计

这个插件将会向 page 对象注入阅读时间与字数统计。

会自动向 page 对象注入 `readingTime`:

```ts
interface ReadingTime {
  /** 分钟数 */
  minutes: number;
  /** 字数 */
  words: number;
}
```

## 使用插件

### 安装

```bash
npm i -D @mr-hope/vuepress-plugin-reading-time
```

或

```bash
yarn add -D @mr-hope/vuepress-plugin-reading-time
```

### 使用

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "@mr-hope/reading-time",
      {
        // 你的选项
      },
    ],
  ],
};
```

## 插件选项

### wordPerminute

- 类型: `number`
- 默认值: `300`

每分钟阅读字数
