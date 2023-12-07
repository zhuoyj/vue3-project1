import { createApp } from "vue";
import router from "@/router";
import { setupStore } from "@/store";
import { setupDirective } from "@/directive";

import "@/permission";
// 国际化
import i18n from "@/lang/index";

import App from "./App.vue";
// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";
// import "./style.css";

import "virtual:svg-icons-register";

const app = createApp(App);
// 全局注册 状态管理(store)
setupStore(app);
app.use(router).use(i18n).mount("#app");

// 全局注册 自定义指令(directive)
setupDirective(app);
