/**
 * @author yangbin
 * @date 2018/5/25
 * @Description: Promise封装数据库查询 并返回查询结果
 */
const conn = require('./config/mysql')

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (err, rows) => {
      if(err){
        reject(err)
      }else{
        resolve(rows)
      }
    })
  })
}

module.exports = {query}