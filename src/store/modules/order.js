/**
 * @author yangbin
 * @date 18/4/21
 * @Description: 订单接口
 */
import {getOrderlist} from '../../api/controller/order'

// mutations
const GET_COMPLETELIST = 'GET_COMPLETELIST'
const GET_UNFINISHEDLIST = 'GET_UNFINISHEDLIST'

// state
const state = {
  orderCompleteList: [],
  orderUnfinishedList: []
}

// mutations
const mutations = {
  [GET_COMPLETELIST] (state, params) {
    state.orderCompleteList = params
  },
  [GET_UNFINISHEDLIST] (state, params) {
    state.orderUnfinishedList = params
  }
}

// actions
const actions = {
  getCompleteHandle ({commit}) {
    getOrderlist({type: 0}).then(rst => {
      commit(GET_COMPLETELIST, rst.data.resultList)
    })
  },
  getUnfinishedHandle ({commit}) {
    getOrderlist({type:1}).then(rst => {
      commit(GET_COMPLETELIST, rst.data.resultList)
    })
  }
}

// getters
const getters = {
  getCompleteOrders(state) {
    return state.orderCompleteList
  },
  getUnfinishedOrders(state) {
    return state.orderUnfinishedList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
