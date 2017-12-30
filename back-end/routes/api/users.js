var mongoose = require('mongoose')
var router = require('express').Router()
var passport = require('passport')
var User = mongoose.model('User')
var auth = require('../auth')

router.post('/users', function(req, res, next){
  // Admin initialization
  if(req.body.username === auth.admin){
    var user = new User()
    user.username = req.body.username
    user.setPassword(req.body.password)

    user.save().then(function(){
      return res.json({ user: user.toAuthJSON() })
    }).catch(next)
  }else{
    return res.status(401).json({ errors: { 'admin': 'is invalid' } })
  }
})

module.exports = router
