/**
 * @author yangbin
 * @date 2018/4/18
 * @Description: vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
// import order from './modules/order'
// import contract from './modules/contract'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    home,
    // order,
    // contract
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default  store