const mongoose = require('mongoose')

const OrderSchema = {
    sender_name: String,
    sender_address: String,
    sender_phone: String,
    receiver_name: String,
    receiver_address: String,
    receiver_phone: String,
    isActive: String,
    emailID: {type: String, required: false},
}

module.exports = mongoose.model("orders", OrderSchema)