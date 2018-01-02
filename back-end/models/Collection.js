var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var slug = require('slug')

var CollectionSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true
  },
  title: String
}, { timestamps: true })

CollectionSchema.plugin(uniqueValidator, { message: 'is already taken.' })

mongoose.model('Collection', CollectionSchema)
