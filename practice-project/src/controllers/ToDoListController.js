const ToDoListModel = require('../models/ToDoListModel');

exports.CreateToDo = (req,res)=>{  //InsertData

    let UserName = req.headers['username'];

    let reqBody = req.body;
    let TodoSubject = reqBody['TodoSubject'];
    let TodoDescription = reqBody['TodoDescription'];
    let TodoStatus = "New";
    let TodoCreateDate = Date.now();
    let TodoUpdateDate = Date.now();


    let InsertTodoData = {
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate

    };


    ToDoListModel.create(InsertTodoData, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

        }else{

            res.status(200).json({status:"success", data:data});

        }
    })
}





//SelectTodo /DataSelect
exports.SelectToDo = (req,res)=>{  

    let UserName = req.headers['username'];
    
    ToDoListModel.find({UserName:UserName}, (error,data)=>{

           if(error){

              res.status(400).json({status:"fail", data:error});

           }else{

            res.status(200).json({status:"success", data:data});  

           }


    })


   
}







//UpdateToDo/DataUpdate
exports.UpdateToDo = (req,res)=>{  

    let reqBody = req.body;
    let TodoSubject = reqBody['TodoSubject'];
    let TodoDescription = reqBody['TodoDescription'];
    let _id = reqBody['_id'];
    let TodoUpdateDate = Date.now();


    let UpdateTodoData = {
      
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate
    };

    
    ToDoListModel.updateOne({_id:_id},{$set:UpdateTodoData}, {upsert:true}, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Update success", data:data});  

         }



    });


   
}







//UpdateStatusToDo/DataUpdate
exports.UpdateStatusToDo = (req,res)=>{  

    let reqBody = req.body;
    let TodoStatus = reqBody['TodoStatus'];
    let _id = reqBody['_id'];
    let TodoUpdateDate = Date.now();


    let UpdateStatusTodoData = {
      
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate
    };

    
    ToDoListModel.updateOne({_id:_id},{$set:UpdateStatusTodoData}, {upsert:true}, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Update success", data:data});  

         }



    });


   
}








//DeleteToDo/DataDelete
exports.DeleteToDo = (req,res)=>{  

    let reqBody = req.body;
    let _id = reqBody['_id'];

    
    ToDoListModel.remove({_id:_id},(error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Delete success", data:data});  

         }



    });


   
}






//SelectToDoByStatus /DataSelect
exports.SelectToDoByStatus = (req,res)=>{  

    let UserName = req.headers['username'];

     

    let TodoStatus = req.body['TodoStatus'];

   // res.send(TodoStatus);

    ToDoListModel.find({UserName:UserName,TodoStatus:TodoStatus}, (error,data)=>{

           if(error){

              res.status(400).json({status:"fail", data:error});

           }else{

            res.status(200).json({status:"success", data:data});  

           }


    })


   
}







//SelectToDoByDate /DataSelect
exports.SelectToDoByDate = (req,res)=>{  

    let UserName = req.headers['username'];
    let FromDate = req.body['FromDate'];
    let ToDate = req.body['ToDate'];
    

    ToDoListModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FromDate), $lte:new Date(ToDate)}}, (error,data)=>{

           if(error){

              res.status(400).json({status:"fail", data:error});

           }else{

            res.status(200).json({status:"success", data:data});  

           }


    })


   
}
