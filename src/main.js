import Vue from "vue";
import App from "./App.vue";
import VueSimpleAlert from "vue-simple-alert";
import { router } from "./routes/index.js";

Vue.config.productionTip = false;
Vue.use(VueSimpleAlert);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
