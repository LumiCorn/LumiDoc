import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LumiDoc | 由 悠悠狮羝LumiCornX 建立的文档网站",
  description: "寻找你喜欢的一切。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
