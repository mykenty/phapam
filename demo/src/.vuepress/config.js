const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Pháp Âm cho người Phật Tử",
  description: "Website dành cho Phật Tử",
  dest: "../public",
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    // "/zh/": {
    //   title: "Pháp Âm | Kinh Chú, Công phu online",
    //   description: "vuepress-theme-hope 的 demo",
    // },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "http://www.phapam.net/",
    pure: true,
    nav: [
      { text: "Trang chủ", link: "/", icon: "home" },
      { text: "Phật tử", link: "/phat-tu/", icon: "people" },
      { text: "Công phu", link: "/cong-phu/", icon: "context" },
      {
        text: "Kinh - Chú",
        link: "/kinh-chu/",
        icon: "note",
      },
      {
        text: "Video",
        icon: "load",
        link: "/video/",
      },
    ],

    sidebar: {
      "/": [
        "",
        "home",
        {
          title: "Kinh - Chú",
          icon: "creative",
          prefix: "kinh-chu/",
          children: [
            "",
            "chu-dai-bi",
            "dai-bi-thap-chu",
            "kinh-phat-danh-ton-thang",
            "kinh-xa-loi",
          ],
        },
        {
          title: "Phật Tử",
          icon: "creative",
          prefix: "phat-tu/",
          children: [
            "",
            "cach-giai-tru-oan-gia-trai-chu",
            "ly-do-that-bai-thuong-gap-trong-an-chay",
            "5-luu-y-khi-hanh-thien",
          ],
        },
      ],
    },

    // locales: {
    //   "/zh/": {
    //     nav: [
    //       { text: "博客主页", link: "/zh/", icon: "home" },
    //       { text: "项目主页", link: "/zh/home/", icon: "home" },
    //       {
    //         text: "如何使用",
    //         icon: "creative",
    //         link: "/zh/guide/",
    //       },
    //       {
    //         text: "主题文档",
    //         icon: "note",
    //         link: "https://vuepress-theme.mrhope.site/zh/",
    //       },
    //     ],
    //     sidebar: {
    //       "/zh/": [
    //         "",
    //         "home",
    //         "slides",
    //         {
    //           title: "如何使用",
    //           icon: "creative",
    //           prefix: "guide/",
    //           children: [
    //             "",
    //             "dai-bi-thap-chu",
    //             "page",
    //             "markdown",
    //             "disable",
    //             "encrypt",
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // },

    author: "Đức Thành",

    blog: {
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com",
      },
    },

    comment: {
      type: "valine",
      baseLang: "vi-VN",
      appId: "msnseO76haIVIGvfJ10BKnpv-gzGzoHsz",
      appKey: "9QMulKhu7EDp1va0TYXR2PrI",
    },

    copyright: {
      status: "global",
    },

    footer: {
      display: true,
      content: "A Di Đà Phật",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: {
          highlight: true,
          math: true,
          search: true,
          notes: true,
          zoom: true,
          anything: true,
          audio: true,
          chalkboard: true,
          sitemap: {
            hostname: "http://www.phapam.net/",
          },
          "vuepress-plugin-seo": {
            siteTitle: (_, $site) => $site.title,
            title: ($page) => $page.title,
            description: ($page) => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: ($page) => $page.frontmatter.tags,
            twitterCard: (_) => "summary_large_image",
            type: ($page) =>
              ["articles", "posts", "blog"].some((folder) =>
                $page.regularPath.startsWith("/" + folder)
              )
                ? "article"
                : "website",
            url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
            image: ($page, $site) =>
              $page.frontmatter.image &&
              (($site.themeConfig.domain &&
                !$page.frontmatter.image.startsWith("http")) ||
                "") + $page.frontmatter.image,
            publishedAt: ($page) =>
              $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: ($page) =>
              $page.lastUpdated && new Date($page.lastUpdated),
          },
        },
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      cacheHTML: false,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
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
        ],
      },
    },

    // lastUpdate: {
    //   timezone: "Asia/Ho_Chi_Minh",
    // },

    // repo: "https://github.com/mister-hope/vuepress-theme-hope",
    // repoLabel: "Github",
  },
});
