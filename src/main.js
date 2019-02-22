// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//
import './api/index';
// import axios from 'axios';
// axios.defaults.timeout = 15000;
// axios.defaults.withCredentials = true;
//
import 'vant/lib/index.css';
import {Locale} from 'vant';
import zhCN from 'vant/lib/locale/lang/zh-CN';

Locale.use('zh-CN', zhCN);
//
import fastClick from 'fastclick';

fastClick.attach(document.body);


// axios.interceptors.request.use(function (config) {
//   console.log('请求通过');
//   console.log(config);
//   return config
// }, function (error) {
//   console.log('请求拒绝');
//   return Promise.reject(error)
// })
// axios.interceptors.response.use(response => {
//   console.log('响应通过');
//   return response
// }, error => {
//   console.log('响应拒绝');
//   return Promise.reject(error)
// })
// Vue.prototype.$axios = axios;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
