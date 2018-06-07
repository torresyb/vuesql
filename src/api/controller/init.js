/**
 * @author yangbin
 * @date 2018/4/18
 * @Description: 初始化数据获取
 */
import {getUrl, getParams} from '../env'
import http from '../http'

/**
 * 初始化获取 订单和合同数量
 * @returns {*}
 */
export function initHandle () {
  let _url = getUrl('/index/queryall')
  return http.get(_url)
}

// export function getListObj (params) {
//   let str = getParams(params)
//   let _url = getUrl('/index/query?'+str)
//   return http.get(_url)
// }