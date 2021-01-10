---
icon: markdown
tags:
  - feature
  - markdown
---

# Markdown 增强

`vuepress-theme-hope` 通过内置 [md-enhance](https://vuepress-md-enhance.mrhope.site)，在 Markdown 中启用了更多的语法与新功能。

`.vuepress/config.js` 中的 `themeconfig.mdEnhance` 会直接传递给插件作为插件选项。所以你也可以直接阅读 [md-enhance 文档](https://vuepress-md-enhance.mrhope.site) 查看用法。

::: tip
请不用担心你的网站大小，如果你不启用相关功能，最终代码不会包含这些功能相关的代码。

同时 VuePress 本身新增了一些 Markdown 语法，如果你对它们不熟悉，可以 [查看官方文档](https://v1.vuepress.vuejs.org/zh/guide/markdown.html)。
:::

## 一键启用

你可以设置 `themeconfig.mdEnhance.enableAll` 启用 [md-enhance](https://vuepress-md-enhance.mrhope.site) 插件的所有功能。

```js {3-5}
module.exports = {
  themeConfig: {
    mdEnhance: {
      enableAll: true,
    },
  },
};
```

::: danger
请仅将此选项用于体验或测试。随着时间的增长，`vupress-plugin-md-enhance` 变得越来越强大。它为 Markdown 解析器添加了更多语法，并输出了更多代码。

启用不需要的功能将增加开发和构建时间。 (`markdown-it` 必须检查额外的语法)

同样，幻灯片演示功能将在输出中添加 700KB 大小的代码 (主要是 `reveal.js`)。

因此，请使用下面的选项，仅启用您要使用的功能。
:::

## 新增的更多语法

### 自定义对齐

::: center
我是居中的
:::

::: right
我在右对齐
:::

- [查看详情](align.md)

### 上下角标

19^th^ H~2~O

- [查看详情](sup-sub.md)

### 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

- [查看详情](footnote.md)

### 标记

你可以标记 ==重要的内容== 。

- [查看详情](mark.md)

### 流程图

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend

- [查看详情](flowchart.md)

### Tex 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看详情](tex.md)

### 代码演示

::: demo 一个普通 Demo

```html
<h1>Ken Trinh</h1>
<p><span id="very">十分</span> 帅</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("十分帅");
});
```

```css
span {
  color: red;
}
```

:::

- [查看详情](demo.md)

### 幻灯片

@slidestart

## 幻灯片 1

一个有文字和 [链接](https://mrhope.site) 的段落

---

## 幻灯片 2

- 列表 1
- 列表 2

---

## 幻灯片 3.1

```js
const a = 1;
```

--

## 幻灯片 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

@slideend

- [查看详情](presentation.md)
