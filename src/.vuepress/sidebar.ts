import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "LumiDoc 首页",
      icon: "house",
      link: "/",
    },
    {
      text: "目录",
      icon: "list",
      link: "/menu",
    },
    {
      text: "AI 提示词",
      icon: "robot",
      prefix: "AI提示词/",
      children: "structure",
    },
    {
      text: "B 站主页",
      icon: "tv",
      link: "https://space.bilibili.com/234052228",
    },
  ],
});
