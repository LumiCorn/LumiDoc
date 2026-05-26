import { defineClientConfig } from "vuepress/client";
import CustomHomeLayout from "./layouts/CustomHome.vue";
import CustomMenuLayout from "./layouts/CustomMenu.vue";
import Kbd from "./components/Kbd.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Kbd", Kbd);
  },
  layouts: {
    CustomHome: CustomHomeLayout,
    CustomMenu: CustomMenuLayout,
  },
});
