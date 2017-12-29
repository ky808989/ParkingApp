const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const routes = require('./src/routes/routes');

require('./src/models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

const mongodb = 'mongodb://localhost/parkplace';
const mongodb_test = 'mongodb://localhost/parkplace_test';
//set up mongoose Promise
mongoose.Promise = global.Promise;


mongoose.connection
    .once('open', () => { console.log('connect success'); })
    .on('error', (error) => { console.warn('connection warning'); });

app.use(
    cookieSession({
        //       d    hh    mm  ss
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());
//require('./routes/authRoutes')(app);
authRoutes(app);

//app.use(bodyParser.json());
//routes(app);



module.exports = app;