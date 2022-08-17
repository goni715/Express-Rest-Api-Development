const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
const ToDoListController = require('../controllers/ToDoListController');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');



//This is HomePage
router.get('/', function(req,res){
    res.end('This is HomePage')
});



//User Registration
router.post('/CreateProfile',ProfileController.CreateProfile);
//User Login//Token Create
router.post('/UserLogin',ProfileController.UserLogin);


//SelectProfile
router.get('/SelectProfile',TokenVerifyMiddleware,ProfileController.SelectProfile);
//UpdateProfile
router.post('/UpdateProfile',TokenVerifyMiddleware,ProfileController.UpdateProfile);



//CreateTodo/DataInsert
router.post('/CreateToDo',TokenVerifyMiddleware,ToDoListController.CreateToDo);
//SelectToDo
router.get('/SelectToDo',TokenVerifyMiddleware,ToDoListController.SelectToDo);
//UpdateToDo
router.post('/UpdateToDo',TokenVerifyMiddleware,ToDoListController.UpdateToDo);
//UpdateStatusToDo
router.post('/UpdateStatusToDo',TokenVerifyMiddleware,ToDoListController.UpdateStatusToDo);
//DeleteToDo
router.post('/DeleteToDo',TokenVerifyMiddleware,ToDoListController.DeleteToDo);
//SelectToDoByStatus
router.get('/SelectToDoByStatus',TokenVerifyMiddleware,ToDoListController.SelectToDoByStatus);
//UpdateToDo
//SelectToDoByDate
router.get('/SelectToDoByDate',TokenVerifyMiddleware,ToDoListController.SelectToDoByDate);
//UpdateToDo





module.exports=router;