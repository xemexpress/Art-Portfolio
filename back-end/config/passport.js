var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var mongoose = require('mongoose')
var User = mongoose.model('User')

passport.user(new LocalStrategy(
  function(username, password, done){
    User.findOne({username: username}).then(function(user){
      if(!user || !user.verifyPassword(password)){
        return done(null, false, { errors: { 'username or password': 'is invalid' } })
      }

      return done(null, user)
    }).catch(done)
  }
))
