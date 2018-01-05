var mongoose = require('mongoose')

var UnitSchema = new mongoose.Schema({
  pos: String,
  image: String,
  text: String,
  collection: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }
}, { timestamps: true })

UnitSchema.methods.toJSONFor = function(){
  return {
    pos: this.pos,
    image: this.image,
    text: this.text,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  }
}

mongoose.model('Unit', UnitSchema)
