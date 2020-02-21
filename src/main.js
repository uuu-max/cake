
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import "../src/assets/resetui.less"
import "./js/index.js"
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$axios=Axios
// Axios 请求拦截器
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('拦截器')
  console.log(response.data)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    this.$store.dispatch('initCars')
  }
})
