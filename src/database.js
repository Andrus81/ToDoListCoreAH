
'use strict'

const mongoose = require('mongoose');
const stringConnection = 'mongodb+srv://andrus:$Xpr0v3rb10sX$8@todolistbdatlass-yg1qf.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(stringConnection,{
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true}
);

module.exports = mongoose;