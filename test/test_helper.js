const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //use ES6 respertention
const keys = require('../config/keys');


//connect to test database
before(() => {
    mongoose.connect(keys.mongoURI);
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