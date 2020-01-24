'use strict'

var stateModel=require('../Models/State');
const mongoose = require('mongoose');
var StateController = {
    
        Get : (req,res)=>{
            
            stateModel.find({})
            .then(data=>{
                res.send(data);
            }).catch(err=>{
                res.status(400).send(err.message); 
            });
        }, 
       //The Post method allows us to store a Task in our database
       Post : (req,res)=>{
        
        let state = new stateModel({
            name:req.body.name,
            
        });
        
        state.save((err) =>{
            if(err){
                res.send(err.message);
            }else{
                res.send('saved successfully'); 
            }            
        });

    },
    Put : (req,res)=>{
        let id = req.params.id;     
        
        stateModel.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send('Put successfully');
            }
            
        }); 
     },

    Delete : (req,res)=>{
        let userid = req.params.id;
        stateModel.findByIdAndDelete(userid,(err)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send('Delete successfully');
            }
            
        }); 
    },
 


}
module.exports= StateController;