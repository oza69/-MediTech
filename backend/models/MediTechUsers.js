const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add your name']
    },
    emailID: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add your password']
    },
    phone: {
        type: String,
    },
});

module.exports =  mongoose.model('medis', UserSchema);