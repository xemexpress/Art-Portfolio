var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var router = require('express').Router()
var passport = require('passport')
var User = mongoose.model('User')
var auth = require('../auth')

// Admin initialization
router.post('/users', function(req, res, next){
  if(req.body.user.username === auth.admin){
    var user = new User()

    user.username = req.body.user.username
    user.setPassword(req.body.user.password)

    user.save().then(function(){
      return res.json({ user: user.toAuthJSON() })
    }).catch(next)
  }else{
    return res.status(401).json({ errors: { 'admin': 'is invalid' } })
  }
})

// Admin login
router.post('/users/login', function(req, res, next){
  if(!req.body.user.username){
    res.status(422).json({ errors: { username: "can't be blank" } })
  }

  if(!req.body.user.password){
    res.status(422).json({ errors: { password: "can't be blank" } })
  }

  passport.authenticate('local', { session: false }, function(err, user, info){
    if(err){ return next(err) }

    if(user){
      return res.json({ user: user.toAuthJSON() })
    }else{
      return res.status(422).json(info)
    }
  })(req, res, next)
})

// Get the current user
router.get('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401)}

    return res.json({ user: user.toAuthJSON() })
  }).catch(next)
})

// Admin Update
router.put('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password)
    }
    
    return user.save().then(function(){
      return res.json({ user: user.toAuthJSON() })
    })
  }).catch(next)
})

module.exports = router
