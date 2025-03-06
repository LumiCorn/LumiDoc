import katex from "katex";
import "katex/dist/katex.min.css";

export default ({ Vue, options, router, siteData }) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）

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
          el.setAttribute("data-katex-processed", "true"); // 标记已处理，避免重复渲染
        }
      });
    }, 500);
  });
};