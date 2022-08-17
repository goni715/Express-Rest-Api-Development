var jwt = require('jsonwebtoken');


module.exports=(req,res,next)=>{

    let Token = req.headers['token-key'];

    jwt.verify(Token, "SecretKey123", function(error, decoded){

         if(error){

             res.status(401).json({status:"invalid token", data:error});

         }else{

             //Get UserName From Decode Token & Add With Request Headers
             let username = decoded['data']['UserName'];
             req.headers.username=username;

             next();
         }


    })

}