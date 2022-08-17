const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

     Name:String,
     Roll:String,
     Class:String,
     Remarks:{type:String, default:"No Remarks"},
     date: {type:Date, default: Date.now}

}, {versionKey:false})


const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;