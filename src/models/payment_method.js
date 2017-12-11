const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentMethodsSchema = new Schema({
    credit_cards:[],
    debit_crads:[],
    mobile_payments:[],
    others:[]
    });

const PaymentMenthod = mongoose.model('payment_method',PaymentMethodsSchema);
module.exports = PaymentMenthod;

