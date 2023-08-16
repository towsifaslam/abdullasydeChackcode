const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
 
 const userRouter = require('./routers/user')
 
const port = 5000;
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))
const MONGO_URL = 'mongodb+srv://frontbackend:frontbackend@cluster0.mqmbtvd.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL)
        .then(()=>{
          app.listen(port,()=>{
            console.log('server is running ')
          })
        })
        .catch(err=> console.log(err))


 app.use('/users',userRouter)       
 app.get('/',(req,res)=>{
  res.status(200).json({message:'succefuly'})
 })