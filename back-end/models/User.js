var mongoose = require('mongoose')
var crypto = require('crypto')

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    require: [true, 'let the world remember you :)'],
    match: [/^[a-zA-Z0-9]+$/, 'can be easier']
  },
  hash: String,
  salt: String
}, { timestamps: true })

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

UserSchema.methods.validPassword = function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash = hash
}

mongoose.model('User', UserSchema)
