var jwt = require('express-jwt')
var secret = require('../config').secret
var admin = require('../config').admin

function getTokenFromHeader(req){
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token'){
    return req.headers.authorization.split(' ')[1]
  }

  return null
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  }),
  admin: admin
}

module.exports = auth
