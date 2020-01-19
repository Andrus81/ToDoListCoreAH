'use strict'

let taskModel=require('../Models/Task');

var TaskController = {
    Get : (req,res)=>{

        taskModel.find({})
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
            stateid: req.body.stateid
        });
        
        task.save((err) =>{
            if(err){
                res.send(err.message);
            }else{
                res.send('saved successfully'); 
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