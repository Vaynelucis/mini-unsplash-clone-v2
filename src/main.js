import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import { VueMasonryPlugin } from "vue-masonry";
import axios from "axios";
import { VueSpinners } from "@saeris/vue-spinners";
Vue.use(VueMasonryPlugin, VueSpinners);
Vue.config.productionTip = false;

new Vue({
  VueSpinners,
  VueMasonryPlugin,
  axios,
  router,
  render: h => h(App)
}).$mount("#app");
