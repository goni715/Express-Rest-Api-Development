const ProfileModel = require('../models/ProfileModel');
var jwt = require('jsonwebtoken');


exports.CreateProfile = (req,res)=>{  //User Registration

    let reqBody = req.body; //

    ProfileModel.create(reqBody, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

        }else{

            res.status(200).json({status:"success", data:data});

        }
    })
}


//UserLogin//TokenCreate
exports.UserLogin = (req,res)=>{  //User Login

    let reqBody = req.body; 
    let UserName = reqBody['UserName'];
    let Password = reqBody['Password'];

    ProfileModel.find({UserName:UserName,Password:Password}, (error,data)=>{

           if(error){

              res.status(400).json({status:"fail", data:error});

           }else{

                    if(data.length>0){

                          //Authentication Token Create   
                           let Payload={
                              exp:Math.floor(Date.now() / 1000) + (31104000), //Unit Seconds //12 Months
                              data:data[0]
                           }

                           let Token= jwt.sign(Payload,"SecretKey123");

                           res.status(200).json({status:"Login success",Token:Token, data:data});

                    }else{

                        res.status(401).json({status:"unauthorized"});
                    }

           }




    })


      
}



//SelectProfile /DataSelect
exports.SelectProfile = (req,res)=>{  //User Login

    let UserName = req.headers['username'];

    ProfileModel.find({UserName:UserName}, (error,data)=>{

           if(error){

              res.status(400).json({status:"fail", data:error});

           }else{

            res.status(200).json({status:"success", data:data});  

           }


    })


   
}




//UpdateProfile /DataUpdate
exports.UpdateProfile = (req,res)=>{  //User Login

    let UserName = req.headers['username'];

    let reqBody = req.body; 
    
    ProfileModel.updateOne({UserName:UserName},{$set:reqBody}, {upsert:true}, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Update success", data:data});  

         }



    });


   
}



