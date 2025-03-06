import katex from "katex";
import "katex/dist/katex.min.css";

export default ({ Vue, options, router, siteData }) => {
  if (process.client) { // 仅在浏览器端执行
    router.afterEach(() => {
      setTimeout(() => {
        document.querySelectorAll("span.katex-mathml").forEach((el) => {
          el.style.display = "inline";
        });

        // 处理行内公式
        document.querySelectorAll("p, li, span").forEach((el) => {
          if (!el.hasAttribute("data-katex-processed")) {
            el.innerHTML = el.innerHTML.replace(/\$(.+?)\$/g, (match, math) => {
              return katex.renderToString(math, {
                throwOnError: false,
                displayMode: false, // 强制行内显示
              });
            });
            el.setAttribute("data-katex-processed", "true"); // 避免重复渲染
          }
        });
      }, 500);
    });
  }
};