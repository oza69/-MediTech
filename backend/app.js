const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://medi:medi@medi.nykga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

try{
    mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log("DB connected");
}
catch(err){
    console.error("DB connection eror::",err);
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// calling the routes file
app.use('/register', require('./routes/users'));
app.use('/login', require('./routes/users'));
app.use('/product', require('./routes/fetchProductDetails'));
app.use('/order', require('./routes/fetchOrderDetails'));

module.exports = app;
