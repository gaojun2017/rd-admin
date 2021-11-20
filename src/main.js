import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/css/common.css'

import 'element-ui/lib/theme-chalk/index.css';
import { Input } from 'element-ui';
Vue.use(Input);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
