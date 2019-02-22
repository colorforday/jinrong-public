import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Licai from '@/pages/licai/index'
import Daikuan from '@/pages/daikuan/index'
import Baoxian from '@/pages/baoxian/index'
import News from '@/pages/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/licai',
      name: 'licai',
      component: Licai
    }, {
      path: '/daikuan',
      name: 'daikuan',
      component: Daikuan
    }, {
      path: '/baoxian',
      name: 'baoxian',
      component: Baoxian
    }, {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
