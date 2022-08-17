var jwt = require('jsonwebtoken');

exports.CreateToken=(req,res)=>{

  let Payload={
      exp:Math.floor(Date.now() / 1000) + (3600),
      data:{Name:"Osman Goni",City:"Dhaka",admin:true}
  }

  let Token= jwt.sign(Payload,"SecretKey123");

  res.send(Token)

}



//DecodeToken
exports.DecodeToken=(req,res)=>{

     let Token = req.headers['token-key'];

     jwt.verify(Token, "SecretKey123", function(error, decoded){

          if(error){

              res.status(401).json({status:"invalid token", data:error});

          }else{

              res.status(200).json({status:"success",data:decoded});
          }


     })

}