/**
 * @author yangbin
 * @date 2018/4/16
 * @Description: 首页路由
 */
import Index from '../components/home/index.vue'
import Login from '../components/login/index.vue'

export default [
  {
    path: '/index',
    component: Index,
    name: 'index',
    meta: {keepAlive: true, header:true, isLogin: true}
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {keepAlive: false, header:false, isLogin: false}
  },
  {
    path: '/',
    redirect: '/index'
  }
]