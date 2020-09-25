const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes.js')

const app = new Koa()
const router = new Router()

module.exports = () => {
  
console.log('[Koa] Creating a new server')

applyRoutes(router)

app.use(router.routes())

app.listen(8080)
}