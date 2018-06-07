/**
 * @author yangbin
 * @date 2018/4/16
 * @Description: 路由
 */
import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from './home.router'

Vue.use(Router)

const routes = [
  ...homeRouter
]

const router = new Router({
  routes
})

export default router