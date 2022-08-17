const StudentsModel = require('../models/StudentsModel');

exports.InsertStudent = (req,res)=>{

    let reqBody = req.body; //

    StudentsModel.create(reqBody, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

        }else{

            res.status(200).json({status:"success", data:data});

        }
    })
}





//Select Data
exports.SelectStudent = (req,res)=>{

     let Query = {};
     let Projection = "Name Roll Class Remarks";

     StudentsModel.find(Query, Projection, (error, data)=>{

         if(error){

            res.status(400).json({status:"fail", data:error});
             
         }else{

            res.status(200).json({status:"success", data:data});
         }
     })

}





//Update Data
exports.UpdateStudent = (req,res)=>{

      let id = req.params.id;
      let Query = {_id:id};
      let reqBody = req.body; //এখানে updateData

      StudentsModel.updateOne(Query,reqBody, (error,data)=>{

          if(error){

             res.status(400).json({status:"fail", data:error});

          }else{

            res.status(200).json({status:"success", data:data});

          }
      })


}






//Delete Data
exports.DeleteStudent = (req,res)=>{

     let id = req.params.id;
     let Query = {_id:id};

     StudentsModel.remove(Query, (error,data)=>{

        if(error){

           res.status(400).json({status:"fail", data:error});

        }else{

          res.status(200).json({status:"success", data:data});

        }
    })

}