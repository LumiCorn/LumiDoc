import { defineClientConfig } from "vuepress/client";
import CustomHomeLayout from "./layouts/CustomHome.vue";
import CustomMenuLayout from "./layouts/CustomMenu.vue";

export default defineClientConfig({
  layouts: {
    CustomHome: CustomHomeLayout,
    CustomMenu: CustomMenuLayout,
  },
});
