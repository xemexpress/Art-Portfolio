var mongoose = require('mongoose')

var ArticleSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'would make it clearer :)']
  },
  body: {
    type: String,
    required: [true, 'would make it clearer :)']
  }
},{ timestamps: true })

ArticleSchema.methods.toJSONFor = function(){
  return {
    id: this._id,
    image: this.image,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  }
}

mongoose.model('Article', ArticleSchema)
