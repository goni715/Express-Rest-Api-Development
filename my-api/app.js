const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const bodyParser = require('body-parser');


//Security Middleware Import
const rateLimit = require('express-rate-limit');
const helemet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');



//Security Middleware Implementation
app.use(cors())
app.use(helemet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())

//bodyParser
app.use(bodyParser.json());

//Request Rate Limiting
const Limiter = rateLimit({
      windowMs: 15 * 60 * 1000,   //15 Minutes
      max: 100   //Limit each IP to 100 requests per windowMs
})
app.use(Limiter);





//MongoDB Database Connection with Mongoose

let uri = "mongodb://127.0.0.1:27017/school";
let option = {user:'', pass:''};

mongoose.connect(uri,option, (error)=>{
      console.log("Connection Success");
      console.log(error);
})









app.use('/api/v1', router);




//Undefined Route
app.use('*',(req,res)=>{

      res.status(404).json({status:"Fail", data:"Not Found"});
});



module.exports=app;




