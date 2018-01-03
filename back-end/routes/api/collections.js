var mongoose = require('mongoose')
// mongoose.Promise = global.Promise
var router = require('express').Router()
var Collection = mongoose.model('Collection')
var User = mongoose.model('User')
var auth = require('../auth')

router.param('collection', function(req, res,next, slug){
  Collection.findOne({ slug: slug })
    .then(function(collection){
      if(!collection){ return res.sendStatus(404) }

      req.collection = collection

      return next()
    }).catch(next)
})

// Create Collection
router.post('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }
    
    var collection = new Collection(req.body.collection)

    return collection.save().then(function(){
      return res.json({ collection: collection.toJSONFor() })
    })
  }).catch(next)

})

// Retrieve Collection
router.get('/:collection', auth.optional, function(req, res, next){
  req.collection.execPopulate().then(function(){
    return res.json({ collection: req.collection.toJSONFor() })
  }).catch(next)
})

module.exports = router
