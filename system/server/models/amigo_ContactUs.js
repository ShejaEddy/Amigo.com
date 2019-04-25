const mongoose = require('mongoose')

var Schema = mongoose.Schema

var contactSchema= new Schema({
    Name: String,
   
    Email:{
       type: String,
       required:true
    } ,
    Message:{
        type: String,
        required:true
    },
    Phonecontact: Number,
       Date:{
        type: Date,
        default: Date.now
    }
},{collection:'ContactUs'})


module.exports = contact = mongoose.model('contact', contactSchema)