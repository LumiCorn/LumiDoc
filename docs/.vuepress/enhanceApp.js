// import vue from 'vue/dist/vue.esm.browser'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
}

import katex from "katex";
import "katex/dist/katex.min.css";

export default ({ router }) => {
  router.afterEach(() => {
    setTimeout(() => {
      document.querySelectorAll("span.katex-mathml").forEach((el) => {
        el.style.display = "inline";
      });

      // 强制渲染行内公式
      document.querySelectorAll("p, li, span").forEach((el) => {
        el.innerHTML = el.innerHTML.replace(/\$(.+?)\$/g, (match, math) => {
          return katex.renderToString(math, {
            throwOnError: false,
            displayMode: false, // 强制行内显示
          });
        });
      });
    }, 500);
  });
};