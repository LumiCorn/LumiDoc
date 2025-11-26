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
        if (typeof window !== "undefined") {     // 此脚本用来在标题栏显示用户离开和返回时的消息
          const originalTitle = document.title;
          const leaveMessage = "(ﾟдﾟ≡ﾟдﾟ)";
          const callOutMessage = "(ﾟдﾟ≡ﾟдﾟ) ...人呢！";
          const returnMessage = "_(¦3」∠)_欢迎回来～";
          let leaveIntervals = [];

          const startLeaveAnimation = () => {
            // 立即显示基础离开消息
            document.title = leaveMessage;
            
            // 第一个周期：1秒后显示"...人呢！"
            leaveIntervals.push(setTimeout(() => {
              if (document.hidden) {
                document.title = callOutMessage;
              }
            }, 1000));

            // 第一个周期：2秒后恢复基础消息
            leaveIntervals.push(setTimeout(() => {
              if (document.hidden) {
                document.title = leaveMessage;
              }
            }, 2000));
            
            // 之后每3秒循环一次
            const cycleInterval = setInterval(() => {
              if (!document.hidden) {
                clearInterval(cycleInterval);
                return;
              }
              
              // 显示"...人呢！"1秒
              document.title = callOutMessage;
              leaveIntervals.push(setTimeout(() => {
                if (document.hidden) {
                  document.title = leaveMessage;
                }
              }, 500));
            }, 3000);
            
            leaveIntervals.push(cycleInterval);
          };

          const stopLeaveAnimation = () => {
            leaveIntervals.forEach(interval => {
              clearInterval(interval);
              clearTimeout(interval);
            });
            leaveIntervals = [];
          };

          const handleVisibilityChange = () => {
            if (document.hidden) {
              startLeaveAnimation();
            } else {
              stopLeaveAnimation();
              document.title = returnMessage;
              setTimeout(() => {
                document.title = originalTitle;
              }, 2000);
            }
          };

          document.addEventListener("visibilitychange", handleVisibilityChange);

          const handleBlur = () => {
            startLeaveAnimation();
          };

          const handleFocus = () => {
            stopLeaveAnimation();
            document.title = returnMessage;
            setTimeout(() => {
              document.title = originalTitle;
            }, 2000);
          };

          window.addEventListener("blur", handleBlur);
          window.addEventListener("focus", handleFocus);
        }
      `
    ]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
