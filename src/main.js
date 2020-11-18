import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from "qs";
// 引入全局组件MyFoot
import MyFoot from "./components/MintUI/MyFoot.vue";
// 引入 Home 页面的 mytable 组件
import MyTable from "./components/MintUI/MyTable.vue";
// 引入 Home 页面的 myleft 组件
import MyLeft from "./components/MintUI/MyLeft.vue";
// 引入 Home 页面 myevery 组件
import MyEvery from "./components/MintUI/MyEvery.vue";
// 引入 Home 页面 myborder 组件
import MyBorder from "./components/MintUI/MyBorder.vue";
import MyHeader from "./components/MintUI/MyHeader.vue";

// 导入MintUI
import MintUI from "mint-ui";
// 导入样式文件
import "mint-ui/lib/style.min.css";
// 注册为Vue的插件
Vue.use(MintUI);
// 给全局组件起别名
Vue.component("my-foot", MyFoot);
Vue.component("my-table", MyTable);
Vue.component("my-left", MyLeft);
Vue.component("my-every", MyEvery);
Vue.component("my-border", MyBorder);
Vue.component("my-header", MyHeader);

axios.defaults.baseURL = "http://127.0.0.1:3000";
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
