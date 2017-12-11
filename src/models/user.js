const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
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


const UserSchema = new Schema({
    user_name:{
        type:String,
        required:true
    },
    contact_info: ContactSchema
});

const User = mongoose.model('user',UserSchema);
module.exports = User;