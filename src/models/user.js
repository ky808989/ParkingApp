const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CarsSchema = new Schema({
    plate_no:{
        type:String,
        required:true,
    },
    car_details:String,
    parking_recs:[]
});

const ContactsSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    address: {
        type: String,
        addressLocality:String,
        addressRegion: String,
        postalCode: String,
        streetAddress: String
      }
});



const UsersSchema = new Schema({
    googleId:String,    
    user_name:{
        type:String,
    },
    photo: {
        type:String,
        default: 'http://thehumorous.com/wp-content/uploads/2013/11/Did-you-eat-the-kitty-cats-treats-Denver-50x50.gif'
     },
    password_hash:{
        type:String,
        default:'1234',
        required: true,
    },
    contact_info: ContactsSchema,
    cars_owned:[CarsSchema],
    membership:{
        type:String,
        default:'regular'
    },
    pay_method:{},
    parking_records:{}
});

const User = mongoose.model('user',UsersSchema);
module.exports = User;