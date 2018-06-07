/**
 * @author yangbin
 * @date 2018/5/25
 * @Description: ctx.body 获取mysql查询数据
 */
let conn = require('../http')
// 查询所有数据
const queryAll = async (ctx, next) => {
  let rows = {}
  await conn.query('SELECT * from list').then(rst =>{
    rows = rst
  })
  // 返回 查询数据
  ctx.body = {data:rows, msg:'成功！', code:'0000'}
}
module.exports = {queryAll}