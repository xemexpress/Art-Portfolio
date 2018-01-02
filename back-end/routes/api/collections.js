var mongoose = require('mongoose')
// mongoose.Promise = global.Promise
var router = require('express').Router()
var Collection = mongoose.model('Collection')
var auth = require('../auth')

module.exports = router
