// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//
import 'vant/lib/index.css';
//
import { Locale } from 'vant';
import zhCN from 'vant/lib/locale/lang/zh-CN';
Locale.use('zh-CN', zhCN);
//
import fastClick from 'fastclick';
fastClick.attach(document.body);






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
