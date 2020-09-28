const authRoutes = require('../features/auth/routes.js');
const registerRoutes = require('../features/register/routes.js');

module.exports = router => {
  authRoutes(router)
  registerRoutes(router)
}