import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
