const express = require('express');
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const mongodb = 'mongodb://localhost/parkplace';
const mongodb_test = 'mongodb://localhost/parkplace_test';
//set up mongoose Promise
mongoose.Promise = global.Promise;

//separte test databases and dev database
if(process.env.NODE_ENV !== 'test'){
    mongoose.connect(mongodb);
}


mongoose.connection
    .once('open', ()=>{ console.log('connect success');})
    .on('error',(error)=>{console.warn('connection warning');});

app.use(bodyParser.json());
routes(app);

module.exports = {app,mongodb,mongodb_test};