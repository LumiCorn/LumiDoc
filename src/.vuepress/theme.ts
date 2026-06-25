import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://doc.lumicornx.xyz",

  darkmode: "auto",

  author: {
    name: "悠悠狮羝LumiCornX",
    url: "https://lumicornx.xyz",
  },

  logo: "/favicon.ico",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar: false,

  // 页脚
  // footer: "",
   displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置 — 中文本地化
  locales: {
    "/": {
      navbarLocales: {
        selectLangAriaLabel: "选择语言",
        selectLangText: "语言",
        selectLangLink: "/",
      },
      sidebarLocales: {
        selectGroupName: "选择分组",
        selectGroupAriaLabel: "选择分组",
      },
      metaLocales: {
        author: "作者",
        date: "日期",
        origin: "原创",
        views: "访问量",
        category: "分类",
        tag: "标签",
        readingTime: "阅读时间",
        words: "字数",
        draft: "草稿",
        toc: "目录",
        prev: "上一篇",
        next: "下一篇",
        lastUpdated: "上次编辑于",
        contributors: "贡献者",
        editLink: "在 GitHub 上编辑此页",
        print: "打印",
      },
      blogLocales: {
        article: "文章",
        articleList: "文章列表",
        category: "分类",
        tag: "标签",
        timeline: "时间轴",
        timelineText: "昨日不在",
        allText: "全部",
        intro: "个人介绍",
        star: "收藏",
      },
      paginationLocales: {
        prev: "上一页",
        next: "下一页",
        navigate: "跳转到",
        actionText: "前往",
        errorText: "请输入 1 到 $page 之前的页码！",
      },
      outlookLocales: {
        themeColor: "主题色",
        darkmode: "主题模式",
        fullscreen: "全屏",
      },
      encryptLocales: {
        iconLabel: "页面已加密",
        title: "请输入密码",
        placeholder: "输入密码...",
        remember: "记住密码",
        errorHint: "密码错误，请重试！",
      },
      routeLocales: {
        skipToContent: "跳至主要内容",
        notFoundTitle: "页面不存在",
        notFoundMsg: [
          "这里什么也没有",
          "我们是怎么来到这里的？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回主页",
        openInNewWindow: "在新窗口打开",
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
 hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    markmap: true,
    preview: true,

    // 取消注释它们如果你需要 TeX 支持
   math: {
    //   // 启用前安装 katex
       type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
   },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 我认为这个网站是学习知识网站，而不是阅读小说。所以用户在浏览网站时应该会相对变慢
    readingTime: {
      wordPerMinute: 125,
      locales: {
        "/": {
          time: "大约需要 $time 分钟看完",
          less1Minute: "不到 1 分钟就能看完"
        },
      },
    },

    // 评论区功能关闭。
    // comment: {
    //  provider: "Giscus",
    //  repo: "vuepress-theme-hope/giscus-discussions",
    //  repoId: "R_kgDOG_Pt2A",
    //  category: "Announcements",
    //  categoryId: "DIC_kwDOG_Pt2M4COD69",
    //},

    components: {

      components: ["Badge", "VPCard", "VidStack", "SiteInfo", "BiliBili", "PDF", "VPBanner", "Share"],

      componentOptions: {
        share: {
          services: ["weibo", "qq", "qzone", "douban", "twitter", "telegram", "facebook", "reddit", "whatsapp", "email"],
        },
      },
    },

    icon: {
      prefix: "fa6-solid:",
      assets: ["fontawesome","iconify","fontawesome-with-brands"],
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
