var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

var UnitSchema = new mongoose.Schema({
  pos: {
    type: String,
    unique: true,
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
  fromCollection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  }
}, { timestamps: true })

UnitSchema.plugin(uniqueValidator, { message: 'is already taken.' })

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
