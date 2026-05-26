import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith("iconify-"),
        },
      },
    },
  }),

  base: "/",

  lang: "zh-CN",
  title: "LumiDoc | 由 悠悠狮羝LumiCornX 建立的文档网站",
  description: "寻找你喜欢的一切。",

  theme,

  head: [
    ["link", { rel: "icon", href: "/LumiDoc_LOGO.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js" }],

    [
      "script",
      {},
      `
        if (typeof window !== "undefined") {
          let originalTitle = document.title;

          const handleFocus = () => {
            document.title = "_(¦3」∠)_欢迎回来～";
            setTimeout(() => {
              document.title = originalTitle;
            }, 1000);
          };

          const handleBlur = () => {
            document.title = "(ﾟдﾟ≡ﾟдﾟ) ...人呢！";
          };

          window.addEventListener("focus", handleFocus);
          window.addEventListener("blur", handleBlur);

          // 监听标题变化，确保 originalTitle 保持最新
          setInterval(() => {
            if (document.title !== "(ﾟдﾟ≡ﾟдﾟ) ...人呢！" && 
                document.title !== "_(¦3」∠)_欢迎回来～") {
              originalTitle = document.title;
            }
          }, 1000);
        }
      `
    ]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
