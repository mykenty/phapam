const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Sitemap Generator",
  description: "Generate Sitemap for your site",

  dest: "./dist",

  locales: {
    "/zh/": {
      title: "Sitemap 生成器",
      description: "为你的站点生成 Sitemap",
    },
  },

  /** 主题配置 */
  themeConfig: {
    /** 网站的logo */
    logo: "/logo.svg",

    author: "Ken Trinh",
    iconPrefix: "vuepress-",

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2019-present Ken Trinh",
    },

    mdEnhance: {
      enableAll: true,
    },
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
        name: "@mr-hope/vuepress-plugin-sitemap",
        short_name: "sitemap plugin",
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
      },
    },

    locales: {
      "/zh/": {},
    },

    hostname: "https://vuepress-sitemap.mrhope.site/",

    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    docsDir: "docs/sitemap/src",
  },
});
