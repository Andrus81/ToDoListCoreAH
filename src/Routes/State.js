'use strict'
const express = require('express');
var route = express.Router();
var stateController = require('../Controllers/StateController');

route.get('/State',stateController.Get); //Route get: List tasks from db
route.post('/State',stateController.Post); 
route.delete('/State/:id',stateController.Delete); 

module.exports = route;