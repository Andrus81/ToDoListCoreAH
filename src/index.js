'use strict'
const express= require('express'); 
//const express= require('express'); 
//initializations 
const app = express();
//settings 
app.set('port',process.env.PORT||3000);


//server is listening
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});