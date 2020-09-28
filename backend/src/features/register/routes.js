const controllers = require('./controllers.js');

module.exports = router => {
  router.post('/register', controllers.create);
}