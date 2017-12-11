const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //use ES6 respertention



//connect to test database
before(() => {
    mongoose.connect('mongodb://localhost/parkplace_test');
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