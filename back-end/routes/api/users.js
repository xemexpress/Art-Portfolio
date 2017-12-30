var mongoose = require('mongoose')
var router = require('express').Router()
var passport = require('passport')
var User = mongoose.model('User')
var auth = require('../auth')


module.exports = router
