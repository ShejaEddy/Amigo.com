const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const user= require('../models/user')
const mongoose = require('mongoose')
users.use(cors())

process.env.SECRET_KEY = 'secret'

  

users.post('/register',(req,res)=>{
    const today = new Date()
    const userData = {
        FirstName: req.body.fname,
        LastName: req.body.lname,
        Email: req.body.email,
        Password:req.body.pwd,
        Date: today
            }   
    user.findOne({
        Email : req.body.email
    })
    .then(answer =>{
        if(!answer){
            bcrypt.hash(req.body.pwd,10,(err, cryptedpwd)=>{
                userData.Password = cryptedpwd
                user.create(userData)
                .then(res.json("success"))
                .catch(err=>{
                    res.send('error, user not registered')
                    console.log('error :'+err)
                })
            })
            
        }else{
            res.json({error: 'User you entered already exists'})
        }
    })
    .catch(err=>{
        res.json({err,error:'Bad connection, Try again later'})
    }) 

})

users.post('/login',(req,res)=>{
    user.findOne({
        Email:req.body.email
    })
    .then(answer=>{
        if(answer){
            checkpwd=bcrypt.compareSync(req.body.pwd,answer.Password)
            if(checkpwd){
                const payload = {
                     _id:answer._id
                    // FirstName:answer.FirstName,
                    // LastName:answer.LastName,
                    // Email:answer.Email,
                    // Date:answer.Date
                }  
                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn:10
                })   
                res.send(token)   
               
            }else{
                res.json({error: 'User does not exist'})
            }
        }else{
            res.json({error:'No account record found'})
        }
    })
    .catch(err=>{

        res.json(err)
    })
  
})
users.get('/profile/:id', (req,res)=>{
    const id = req.params.id
    user.findOne(
        {_id : id}
        )
    .then(docs=>{
        if(docs){
          res.json(docs)
      
        }else{
           
            res.json('no data has this id')
        }
        
            
    }) 
    .catch(err=>{
        
            res.json(err)
            console.log(err)
        
           
        })
        
    
 }) 

 users.post('/profile/:id', (req,res)=>{
    const id = req.params.id  
 
    user.findById(
        {_id : id}
        )
   
     .then(doc=>{
         if(doc){
         doc.FirstName=req.body.newfname
         doc.save()
          console.log('oui byemeye')
         }
        else{
            console.log("failed")
        }
        
     })       
   
    .catch(err=>{
        
            res.json(err)
            console.log(err)
        
           
        })


    
    
 }) 
 //  users.patch('/profile/:id', (req,res)=>{
//     const id = req.params.id  
//     const updateOps={}
//     for(const ops of req.body){
//         updateOps[ops.propName]=ops.value
//     }
//     user.update(
//         {_id : id},{$set:updateOps}
//         )
//     .exec()
//      .then(res=>{
//          console.log("fname hinduye")
//           res.json(res)
//          }
       
//      )       
   
//     .catch(err=>{
        
//             res.json(err)
//             console.log(err)
        
           
//         })
    
//  })
module.exports= users






