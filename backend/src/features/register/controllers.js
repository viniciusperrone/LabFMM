const Validator = require('fastest-validator');

const services = require("./services.js");

const Boom = require('boom')

const v = new Validator()

module.exports = {
  create: async ctx => {
    const { request, response } = ctx

    const schema = {
      name: {max: 100, min: 10, type:'string'},
      email: {max: 120, min: 10, type:'string'},
      discipline: {max: 80, min: 10, type:'string'},
      password: {max: 20, min: 4, type:'string'}
    }

    const errors = v.validate(body, schema)

    if(Array.isArray(errors) && errors.length){
      response.status = 400;
      response.body = Boom.badRequest(null, errors)
    }
    const user = await services.create(body)
    response.body = user
  }
}