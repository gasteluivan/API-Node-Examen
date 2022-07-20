require("dotenv").config();
const mongoose = require('mongoose');

const dbconnection = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('MongoDB is connected');
        }
    });
}

module.exports = dbconnection