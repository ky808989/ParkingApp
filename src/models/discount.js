const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscountsSchema = new Schema({
    mebers_ids:[],
    sale_ids:[],
    other_ids:[]
    });

const Discount = mongoose.model('discount_method',DiscountsSchema);
module.exports = Discount;

