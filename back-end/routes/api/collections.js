var mongoose = require('mongoose')
// mongoose.Promise = global.Promise
var router = require('express').Router()
var Collection = mongoose.model('Collection')
var Unit = mongoose.model('Unit')
var User = mongoose.model('User')
var auth = require('../auth')

router.param('collection', function(req, res,next, slug){
  Collection.findOne({ slug: slug }).then(function(collection){
      if(!collection){ return res.sendStatus(404) }

      req.collection = collection

      return next()
    }).catch(next)
})

router.param('unit', function(req, res, next, pos){
  Unit.findOne({ pos: pos }).then(
    function(unit){
      if(!unit){ return res.sendStatus(404) }

      req.unit = unit

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
      req.collection.slugify()
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

    Unit.find({
      _id: {
        $in: req.collection.units
      }
    }).remove().then(function(units){
      return req.collection.remove().then(function(){
        return res.sendStatus(204)
      })
    })
  })
})

// Create Unit on Collection
router.post('/:collection/units', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    var unit = new Unit(req.body.unit)

    return unit.save().then(function(){
      req.collection.units.push(unit)

      req.collection.save().then(function(){
        return res.json({
          unit: unit.toJSONFor()
        })
      })
    })
  }).catch(next)
})

// List Units on Collection
router.get('/:collection/units', auth.optional, function(req, res, next){
  req.collection.populate({
    path: 'units',
    options: {
      sort: {
        pos: 'asc'
      }
    }
  }).execPopulate().then(function(collection){
    let unitsCount = collection.units.length

    return res.json({
      units: collection.units.map(function(unit){
        return unit.toJSONFor()
      }),
      unitsCount: unitsCount
    })
  }).catch(next)
})

// Update Unit
router.put('/:collection/units/:unit', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    if(typeof req.body.unit.pos !== 'undefined'){
      req.unit.pos = req.body.unit.pos
    }

    if(typeof req.body.unit.image !== 'undefined'){
      req.unit.image = req.body.unit.image
    }

    if(typeof req.body.unit.text !== 'undefined'){
      req.unit.text = req.body.unit.text
    }

    req.unit.save().then(function(unit){
      return res.json({ unit: unit.toJSONFor() })
    }).catch(next)

  })
})

// Delete Unit
router.delete('/:collection/units/:unit', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    req.collection.units.remove(req.unit._id)
    req.collection.save().then(
      Unit.find({ _id: req.unit._id }).remove().exec()
    ).then(
      function(){
        res.sendStatus(204)
      }
    )
  })
})

module.exports = router
