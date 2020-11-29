// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// // element
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// // axios
import axios from 'axios'
// 设置一个类似base_url的请求路径
axios.defaults.baseURL = 'http://192.168.0.149:9090'
// 设置Content-Type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 设置一个全局axios便于调用
global.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.use(ElementUI)
Vue.config.productionTip = false
