var mongoose = require('mongoose')
var router = require('express').Router()
var passport = require('passport')
var User = mongoose.model('User')
var auth = require('../auth')

// Admin initialization
router.post('/users', function(req, res, next){
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

// Admin login
router.post('/users/login', function(req, res, next){
  if(!req.body.username){
    res.status(422).json({ errors: { username: "can't be blank" } })
  }

  if(!req.body.password){
    res.status(422).json({ errors: { password: "can't be blank" } })
  }

  passport.authenticate('local', { session: false }, function(err, user, info){
    if(err){ return next(err) }

    if(user){
      return res.json({ user: user.toAuthJSON })
    }else{
      return res.status(422).json(info)
    }
  })(req, res, next)
})

module.exports = router
