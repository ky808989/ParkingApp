const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const 
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
    user_name:{
        type:String,
        required:true
    },
    contact_info: ContactsSchema,
    password_hash:{
        type:String,
        default:'1234',
        required: true,
    },
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