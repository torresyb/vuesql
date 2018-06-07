/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: server端
 */
const koa = require('koa')
const cors = require('koa2-cors')
const serve = require('koa-static')
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// 订单路由
const initApi = require('./init.router')

const app = new koa()
const router = new Router()

app.use(bodyParser())
app.use(cors())

app.use(serve(path.resolve(__dirname, './public')))
//  ****************  装载所有子路由
// 初始化数据
router.use('/index', initApi.routes(), initApi.allowedMethods())

// ****************  加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

// ***************  启动服务
app.listen(9093, function () {
  console.log('app server is ready!')
})