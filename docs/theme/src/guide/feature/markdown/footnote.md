---
icon: footnote
category: markdown
tags:
  - feature
  - markdown
---

# Footnote

Let the Markdown file in your VuePress site support footnotes.

## Configuration

```js {4}
module.exports = {
  themeConfig: {
    mdEnhance: {
      footnote: true,
    },
  },
};
```

## Syntax

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
