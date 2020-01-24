'use strict'

const mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
  
  name:{
        type:String,
        require: [true,'The field name is required'],
        index:{unique:false},
        minlength:[5,`The name must be a minimun of 5 characters`],
        maxlength:[50,'the name must be a maximum of 5 characters ']
      }, 
      createDate:{ type:Date, default:Date.now }

});

module.exports = mongoose.model('User',UserSchema);
    