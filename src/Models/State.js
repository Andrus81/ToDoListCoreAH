'use strict'

var mongoose = require("mongoose");
//const Constants = require('../Utils/Constants');

var status = mongoose.Schema({
    name: {
        type:String,
        require: [true,'The field name is required'],
        index:{unique:true},
        minlength:[5,`The name must be a minimun of 5 characters`],
        maxlength:[50,'the name must be a maximum of 5 characters ']
       },
   description: {
       type: String , 
       minlength:[5,`The name must be a minimun of 5 characters`],
       maxlength:[120,'the name must be a maximum of 5 characters ']
    },
   userid:{   type: String , 
           require: [true,'The field name is required'],
        },
   createDate:{ type:Date, default:Date.now }
});

module.exports = mongoose.model('Status',status);