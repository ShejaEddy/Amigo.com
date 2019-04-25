const mongoose = require('mongoose')

var Schema = mongoose.Schema

var userDataSchema= new Schema({
    FirstName: String,
    LastName: String,
    Email:{
       type: String,
       required:true
    } ,
    Password:{
        type: String,
        required:true
     },
    Date:{
        type: Date,
        default: Date.now
    }
},{collection:'Registration'})


module.exports = user = mongoose.model('users', userDataSchema)