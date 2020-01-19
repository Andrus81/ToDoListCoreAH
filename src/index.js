'use strict'
const express= require('express'); 
const cors=require('cors');
let mongoDB = require("./database");

const app = express();

//Settings 
app.set('port',process.env.PORT||3000);

//Middlewares
app.use(express.urlencoded({extended:false}));//para que cuando un formulario me envie datos yo pueda entendderlo
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./Routes/User'));
app.use(require('./Routes/Task'));
app.use(require('./Routes/State'));

//Server is listening
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});