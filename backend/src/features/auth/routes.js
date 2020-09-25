const controllers = require('./controllers.js')

module.exports = router => {
  router.get('/', controllers.auth)
}