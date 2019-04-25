var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()
var port = process.env.PORT || 2000


//middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())



//get home-page
app.get('/',(req,res)=>{
    res.send('home page')
})

//mongoose connection

mongoose.connect('mongodb://localhost:27017/mydb',
{useNewUrlParser:true})
.then(()=>console.log('db connected'))
.catch((err)=>console.log('db not connected'))

var users = require('./routes/users')
app.use('/users', users )
var contact = require('./routes/ContactUs')
app.use('/visitors',contact)
app.listen(port,function(){
    console.log("server is running on port :" +port);    
})


module.exports = app;








