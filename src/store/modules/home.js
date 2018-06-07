/**
 * @author yangbin
 * @date 2018/4/18
 * @Description: 获取未确认/已确认订单数  未确认/已确认合同数
 */
import {initGetNum, getListObj} from '../../api/controller/init'

// mutationsType
const GET_NUMBERS = 'GET_NUMBERS'
const GET_LIST = 'GET_LIST'

//state
const state = {
  initNum: {},
  listObj: []
}

// mutations
const mutations = {
  [GET_NUMBERS] (state, params) {
    state.initNum = params
  },
  [GET_LIST] (state, params) {
    state.listObj = JSON.parse(params)
  }
}

//action
const actions = {
  getNumberHandle({commit}) {
    initGetNum().then(rst => {
      commit(GET_NUMBERS, rst.data.data)
    })
  },
  getListObjHandle({commit}, params) {
    getListObj(params).then(rst => {
      commit(GET_LIST, rst.data.data)
    })
  }
}

const getters = {
  getNums(state) {
    return state.initNum
  },
  getLists(state) {
    return state.listObj
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
