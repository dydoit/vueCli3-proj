import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.styl'
Vue.config.productionTip = false
Vue.use(ElementUI);
console.log(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
