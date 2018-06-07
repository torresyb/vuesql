const Router = require('koa-router')
const router = new Router()
const initCtr = require('./controller/init')

//query all
router.get('/queryall', initCtr.queryAll)

module.exports = router