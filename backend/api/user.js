const User = require('../models/MediTechUsers');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

exports.register = (req, res) => { 
    
    try {
        const {emailID, password, username, phone } = req.body;
        User.findOne({emailID})
        .then(user => {
            if(user) {
                return res.status(200).json({
                    message: "User already exists", status: 400
                })
            }
        })

        
        const newMediTechUser = new User({
            username, emailID, password, phone
        })
        
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newMediTechUser.password, salt, (err, hash) => {
                if (err) throw err;
                newMediTechUser.password = hash;
                newMediTechUser.save().then(() => {
                    return res.status(200).json({
                        message: "User Added", status: 200
                    })
                });
            })
        })



    } catch(err) {
        console.log(err);
    }
}

exports.login = (req, res) => { 
    
    try {
        const {emailID, password} = req.body;

        User.findOne({emailID})
        .then(user => {
            if(user) {
                if (!user) return res.status(400).json({ message: 'User does not exist', status: 400 })
                if(user) {
                    bcrypt.compare(password, user.password).then(match => {
                        if (!match) return res.status(400).json({ message: 'Invalid credentials', status: 400 })
                        return res.status(200).json({message: 'Credentials Valid', status: 200})
                    })
                }
            }
        })

    } catch(err) {
        console.log(err);
    }
}