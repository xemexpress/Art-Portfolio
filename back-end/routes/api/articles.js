var mongoose = require('mongoose')
var router = require('express').Router()
var Article = mongoose.model('Article')
var User = mongoose.model('User')
var auth = require('../auth')

router.param('article', function(req, res, next, id){
  Article.findById(id).then(function(article){
    if(!article){ return res.sendStatus(404) }

    req.article = article

    return next()
  }).catch(next)
})

// Create Article
router.post('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    var article = new Article(req.body.article)

    return article.save().then(function(){
      return res.json({ article: article.toJSONFor() })
    })
  }).catch(next)
})

// Retrieve Article
router.get('/:article', auth.optional, function(req, res, next){
  req.article.execPopulate().then(function(){
    return res.json({ article: req.article.toJSONFor() })
  }).catch(next)
})

// Update Article
router.put('/:article', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    if(typeof req.body.article.image !== 'undefined'){
      req.article.image = req.body.article.image
    }

    if(typeof req.body.article.body !== 'undefined'){
      req.article.body = req.body.article.body
    }

    req.article.save().then(function(article){
      return res.json({ article: article.toJSONFor() })
    }).catch(next)
  })
})

// Delete Article
router.delete('/:article', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401) }

    return req.article.remove().then(function(){
      return res.sendStatus(204)
    })
  }).catch(next)
})

module.exports = router
