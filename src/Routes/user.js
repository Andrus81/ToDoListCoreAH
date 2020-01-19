'use strict'
const express = require('express');
var route = express.Router();
var userController = require('../Controllers/UserController');

route.get('/User',userController.Get); //Route get: List users from db    
route.post('/User',userController.Post); //Route post: Add new user to dbv    
route.delete('/User/:id',userController.Delete); //Route delete: remove user from db

module.exports = route;