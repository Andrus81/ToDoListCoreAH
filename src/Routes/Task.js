'use strict'
const express = require('express');
var route = express.Router();
var taskController = require('../Controllers/TaskController');

route.get('/Task',taskController.Get); //Route get: List tasks from db
route.post('/Task',taskController.Post); 
route.delete('/Task/:id',taskController.Delete); 
module.exports = route;