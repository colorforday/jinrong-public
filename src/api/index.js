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
  console.log(error);
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  console.log('响应通过');
  console.log(response);
  return response
}, function (error) {
  console.log('响应拒绝');
  console.log(error);
  return Promise.reject(error);
})

Vue.prototype.$axios = axios;

/**
 * 封装get方法
 */
export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers: headers
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 */
export function deletes (url, params = {}, config) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params,
      ...config
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
