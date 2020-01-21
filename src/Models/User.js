'use strict'

const mongoose = require('mongoose');
//const Constants = require('../Utils/Constants');

var UserSchema = mongoose.Schema({
  
  name:{
        type:String,
        require: [true,'The field name is required'],
        index:{unique:true},
        minlength:[5,`The name must be a minimun of 5 characters`],
        maxlength:[50,'the name must be a maximum of 5 characters ']
      }, 
      createDate:{ type:Date, default:Date.now }

});

module.exports = mongoose.model('User',UserSchema);
    