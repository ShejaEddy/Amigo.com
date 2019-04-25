const express = require("express")

const cors = require('cors')
const contact= require('../models/amigo_ContactUs')
const router=express.Router()
const mongoose=require('mongoose')



router.post('/ContactUs',(req,res)=>{
    const today = new Date()
    const contacts= {
        Name: req.body.contactname,        
        Email: req.body.contactemail,        
        Message: req.body.contactmessage,
        Phonecontact: req.body.contactnumber,
        Date:today
    }
        contact.create(contacts)
        .then(result=>{
            res.send('success')
        })
        .catch(err=>{
            res.json("ntibikunze boss")
            console.log(err)
        }
            )
        
    
   
})



module.exports = router