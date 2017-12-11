const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //use ES6 respertention
const mongodb_test = require('../app').mongodb_test;


//connect to test database
before(() => {
    mongoose.connect(mongodb_test);
    mongoose.connection
    .once('open', () => {})
    .on('error',(error) => { console.warn('Warning',error);
    });
    
});

beforeEach((done)=>{
    mongoose.connection.collections.users.drop( () => {
        done()
    });
});