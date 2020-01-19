'use strict'

var userModel=require('../Models/User');

var UserController = {
    
        Get : (req,res)=>{
            
            userModel.find({})
            .then(data=>{
                res.send(data);
            }).catch(err=>{
                res.status(400).send(err.message); 
            });
        }, 
       //The Post method allows us to store a Task in our database
       Post : (req,res)=>{
        
        let user = new userModel({
            name:req.body.name,
            
        });
        
        user.save((err) =>{
            if(err){
                res.send(err.message);
            }else{
                res.send('saved successfully'); 
            }            
        });

    },

    Delete : (req,res)=>{
        let idUser = req.params.id;
        userModel.findByIdAndDelete(idUser,(err)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send('Delete successfully');
            }
            
        }); 
    },
 


}
module.exports= UserController;