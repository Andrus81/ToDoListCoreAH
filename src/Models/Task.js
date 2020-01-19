'use strict'

const mongoose= require('mongoose');

var TaskSchema=mongoose.Schema({
  name:{
    type:String,
    require: [true,'The field name is required'],
    index:{unique:true},
    minlength:[5,`The name must be a minimun of 5 characters`],
    maxlength:[50,'the name must be a maximum of 5 characters ']
  }, 
  description:{
    type:String,
    require: [true,'The field name is required'],
    minlength:[5,`The name must be a minimun of 5 characters`],
    maxlength:[120,'the name must be a maximum of 5 characters ']
  },
  userid:String,
  stateid:String,
  createDate:{ type:Date, default:Date.now }
});
module.exports = mongoose.model('Task',TaskSchema);