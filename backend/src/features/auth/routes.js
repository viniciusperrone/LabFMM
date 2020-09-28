const controllers = require('./controllers.js')

module.exports = router => {
  router.post('/', controllers.auth)
}