'use strict'

const mongoose= require('mongoose');

var TaskSchema=mongoose.Schema({
  nombre: String,
  description:String,
  userid:String,
  stateid:String,
  createDate:{ type:Date, default:Date.now }
});