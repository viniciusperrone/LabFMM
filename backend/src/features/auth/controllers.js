const Boom = require('boom')
const services = require('./services.js')
const jwt = require('jsonwebtoken')

module.exports = {
  auth: async ctx => {
    const { request, response } = ctx
    const user = await services.auth(request.body)
    console.log(user)

    if(user){
      response.body = {
        result: jwt.sign({email: user.email}, 'ok')
      }
    } else{
      response.body = { result: Boom.badRequest() }
    }  
}
}