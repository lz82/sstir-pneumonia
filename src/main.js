import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.less";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "babel-polyfill";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
