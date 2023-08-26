const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema(

    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        items: { type: Array, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        cardCompany: { type: String, required: true },
        cardNumber: { type: String, required: true },
        total: { type: Number, required: true },
        inProgress: { type: Boolean, default:false, required: false },
        comment: { type: String, required: false },
   

    }

)

module.exports = mongoose.model('orders', Order)