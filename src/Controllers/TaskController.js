'use strict'

let taskModel=require('../Models/Task');
const mongoose = require('mongoose');

var TaskController = {
    Get : (req,res)=>{
        let filter={};
        if(req.query.id!=undefined) {
            filter._id=mongoose.Types.ObjectId(req.query.id);
            }

        taskModel.find(filter)
        .then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(400).send(err.message); 
        });
    }, 
       //The Post method allows us to store a Task in our database
       Post : (req,res)=>{
        
        let task = new taskModel({
            name:req.body.name,
            description:req.body.description,
            userid:req.body.userid,
            stateid: req.body.stateid,
            state: req.body.state
        });
        
        task.save((err) =>{
            if(err){
                res.send(err.message);
            }else{
                res.send('saved successfully'); 
            }            
        });

    },
       Put : (req,res)=>{
        let id = req.params.id;     
        
        taskModel.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send('Put successfully');
            }
            
        }); 
     },

    Delete : (req,res)=>{
        let idTask = req.params.id;
        taskModel.findByIdAndDelete(idTask,(err)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send('Delete successfully');
            }
            
        }); 
    },

}
module.exports= TaskController;