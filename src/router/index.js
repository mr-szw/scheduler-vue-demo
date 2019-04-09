import Vue from 'vue'
import Router from 'vue-router'

import MainPage from "./../components/mainPage"

Vue.use(Router)

// 做路由 根目录路由到 MainPage 页面
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Router to MainPage',
      component: MainPage
    },{
      path: '/first',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
