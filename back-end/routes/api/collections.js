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

// Update Collection
router.put('/:collection', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    if(typeof req.body.collection.title !== 'undefined'){
      req.collection.title = req.body.collection.title
    }

    req.collection.save().then(function(collection){
      return res.json({ collection: collection.toJSONFor() })
    }).catch(next)
  })
})

// Delete Collection
router.delete('/:collection', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }
    
    return req.collection.remove().then(function(){
      return res.sendStatus(204)
    })
  })
})

module.exports = router
