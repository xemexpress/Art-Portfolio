var mongoose = require('mongoose')

var UnitSchema = new mongoose.Schema({
  pos: {
    type: String,
    required: [true,'get it placed well :)']
  },
  image: {
    type: String,
    required: [true, 'let people see your work :)']
  },
  text: {
    type: String,
    required: [true, 'let people understand your work :)']
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  }
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
