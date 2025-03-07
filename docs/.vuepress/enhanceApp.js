import katex from "katex";
import "katex/dist/katex.min.css";

export default ({ Vue, options, router, siteData }) => {
  if (typeof window !== "undefined") {
    Vue.mixin({
      mounted() {
        this.$nextTick(() => {
          renderMath();
        });
      },
      updated() {
        this.$nextTick(() => {
          renderMath();
        });
      }
    });

    router.afterEach(() => {
      setTimeout(() => {
        renderMath();
      }, 500);
    });
  }
};

function renderMath() {
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
}

// 敬我和 ChatGPT 一杯！在多年的修改下终于解决了行内公式的渲染问题！



