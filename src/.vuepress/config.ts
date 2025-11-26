import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LumiDoc | 由 悠悠狮羝LumiCornX 建立的文档网站",
  description: "寻找你喜欢的一切。",

  theme,

  head: [
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
