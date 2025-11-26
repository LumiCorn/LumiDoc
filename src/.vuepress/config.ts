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
          let originalTitle = document.title;  // 保存 VuePress 生成的完整标题 
          let leaveIntervals = [];
          const leaveMessage = "(ﾟдﾟ≡ﾟдﾟ)";
          const callOutMessage = "(ﾟдﾟ≡ﾟдﾟ) ...人呢！";
          const returnMessage = "_(¦3」∠)_欢迎回来～";

          // 简单的标题保存和恢复，不重写标题逻辑
          const saveCurrentTitle = () => {
            originalTitle = document.title;
          };

          const initializeTitle = () => {
            // 等待 VuePress 完成初始标题设置
            setTimeout(() => {
              saveCurrentTitle();
            }, 500);
          };

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeTitle);
          } else {
            initializeTitle();
          }

          const startLeaveAnimation = () => {
            // 动画开始前保存当前 VuePress 生成的标题
            saveCurrentTitle();
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
                // 恢复 VuePress 生成的标题
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

          // 监听路由变化，在 VuePress 更新标题后保存
          const setupTitleTracking = () => {
            let lastTitle = document.title;
            
            // 简单轮询检查标题变化（更轻量）
            setInterval(() => {
              if (document.title !== lastTitle && 
                  document.title !== leaveMessage && 
                  document.title !== callOutMessage && 
                  document.title !== returnMessage) {
                lastTitle = document.title;
                originalTitle = document.title;
              }
            }, 1000);
          };

          // 延迟设置标题跟踪
          setTimeout(setupTitleTracking, 1000);
        }
      `
    ]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
