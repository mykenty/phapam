const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Comment Plugin",
  description: "Comment Plugin for VuePress",
  dest: "./dist",

  // locales: {
  //   "/zh/": { title: "评论插件", description: "VuePress 的评论插件" },
  // },

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Home", icon: "home", link: "/" },
      {
        text: "Guide",
        icon: "creative",
        items: [
          {
            text: "Page Info",
            icon: "info",
            link: "/guide/page-info/",
          },
          { text: "Valine", icon: "valine", link: "/guide/valine/" },
          { text: "Vssue", icon: "vssue", link: "/guide/vssue/" },
        ],
      },
      {
        text: "Config",
        icon: "config",
        items: [
          { text: "Config", icon: "config", link: "/config/" },
          {
            text: "Valine",
            icon: "valine",
            link: "/config/valine/",
          },
          { text: "Vssue", icon: "vssue", link: "/config/vssue/" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        "",
        "page-info",
        "valine",
        {
          title: "Vssue",
          icon: "vssue",
          children: [
            "vssue",
            {
              title: "Supported platforms",
              icon: "support",
              children: [
                "supported-platforms",
                "github",
                "gitlab",
                "gitee",
                "bitbucket",
              ],
            },
          ],
        },
      ],
      "/config/": ["", "valine", "vssue"],
      "/": ["", "guide/", "config/"],
    },

    author: "Đức Thành",
    iconPrefix: "vuepress-",

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2019-present Đức Thành",
    },

    mdEnhance: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "GG2VSnGiz09Rx18y2OUzdaHS-gzGzoHsz",
      appKey: "fBf2dptTBHxNqALKrzUlBXeB",
    },

    // locales: {
    //   "/zh/": {
    //     nav: [
    //       { text: "主页", icon: "home", link: "/zh/" },
    //       {
    //         text: "指南",
    //         icon: "creative",
    //         items: [
    //           {
    //             text: "页面信息",
    //             icon: "info",
    //             link: "/zh/guide/page-info/",
    //           },
    //           { text: "Valine", icon: "valine", link: "/zh/guide/valine/" },
    //           { text: "Vssue", icon: "vssue", link: "/zh/guide/vssue/" },
    //         ],
    //       },
    //       {
    //         text: "配置",
    //         icon: "config",
    //         items: [
    //           { text: "配置", icon: "config", link: "/zh/config/" },
    //           { text: "Valine", icon: "valine", link: "/zh/config/valine/" },
    //           { text: "Vssue", icon: "vssue", link: "/zh/config/vssue/" },
    //         ],
    //       },
    //     ],

    //     sidebar: {
    //       "/zh/guide/": [
    //         "",
    //         "page-info",
    //         "valine",
    //         {
    //           title: "Vssue",
    //           icon: "vssue",
    //           children: [
    //             "vssue",
    //             {
    //               title: "支持平台",
    //               icon: "support",
    //               children: [
    //                 "supported-platforms",
    //                 "github",
    //                 "gitlab",
    //                 "gitee",
    //                 "bitbucket",
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //       "/zh/config/": ["", "valine", "vssue"],
    //       "/zh/": ["", "guide/", "config/"],
    //     },
    //   },
    // },
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "@mr-hope/vuepress-plugin-comment",
        short_name: "comment plugin",
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    hostname: "https://vuepress-comment.mrhope.site/",

    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    docsDir: "docs/comment/src",
  },
});
