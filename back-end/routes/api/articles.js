var mongoose = require('mongoose')
var router = require('express').Router()
var Article = mongoose.model('Article')
var User = mongoose.model('User')
var auth = require('../auth')

// Preload Article
router.param('article', function(req, res, next, id){
  Article.findById(id).then(function(article){
    if(!article){ return res.sendStatus(404) }

    req.article = article

    return next()
  }).catch(next)
})

// List Articles
router.get('/', auth.optional, function(req, res, next){
  var limit = 10
  var offset = 0

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset
  }

  return Promise.all([
    Article.find({})
    .limit(limit)
    .skip(offset)
    .sort({ createdAt: 'desc' })
    .exec(),
    Article.count({})
  ]).then(function(results){
    let articles = results[0]
    let articlesCount = results[1]

    return res.json({
      articles: articles.map(function(article){
        return article.toJSONFor()
      }),
      articlesCount: articlesCount
    })
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

    req.article.remove().then(function(){
      return res.sendStatus(204)
    })
  }).catch(next)
})

module.exports = router
