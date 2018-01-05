var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var slug = require('slug')

var CollectionSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true
  },
  title: String,
  units: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }],
}, { timestamps: true })

CollectionSchema.plugin(uniqueValidator, { message: 'is already taken.' })

CollectionSchema.methods.slugify = function(){
  this.slug = slug(this.title)
}

CollectionSchema.pre('validate', function(next){
  if(!this.slug){
    this.slugify()
  }
  next()
})

CollectionSchema.methods.toJSONFor = function(){
  return {
    slug: this.slug,
    title: this.title,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  }
}

mongoose.model('Collection', CollectionSchema)
