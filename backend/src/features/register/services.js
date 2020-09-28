const db = require('../../database/models/index.js');

module.exports = {
  create: payload => db.User.create(payload)
}