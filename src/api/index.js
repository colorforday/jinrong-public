//
import Vue from 'vue';
import axios from 'axios';

axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
  console.log('请求通过');
  console.log(config);
  return config
}, error => {
  console.log('请求拒绝');
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  console.log('响应通过');
  return response
}, function(error){
  console.log(error);
  console.log('响应拒绝');
  return Promise.reject(error);
})

Vue.prototype.$axios = axios;
