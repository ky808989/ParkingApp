const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
    type:{
        type:String, 
        default: 'Point'
    },
    coordinates:{
        type:[Number],index:'2dsphere'
    }
});
const ParkingRecordsSchema = new Schema({
    enter_time:{
        type:Date,
        required:true
    },
    exit_time:{
        type:Date,
        required:true
    },
    parking_location:PointSchema,
    has_parid:{
        type:Boolean,
        default:false
    },
    discounts:{
        type:String,
    
    },
    paid_amount:{
        type:Number,
        default:0
    },
    bill_date_time:{
        type:Date
    }

});

const  ParkingRecord= mongoose.model('parking_record',ParkingRecordsSchema);
module.exports = ParkingRecord;