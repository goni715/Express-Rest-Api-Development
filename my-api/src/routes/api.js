const express = require('express');
const router = express.Router();

const HelloController = require('../controllers/HelloController');
const StudentsController = require('../controllers/StudentsController');
const TokenIssueController = require('../controllers/TokenIssueController');
const JWTPractice = require('../controllers/JWTPractice');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');


//This is my First get routing
router.get('/hello-get', HelloController.HelloGet);

router.post('/hello-post', HelloController.HelloPost);



//Token Issue/Token Create
router.get('/AuthTokenIssue', TokenIssueController.TokenIssue);

//Mongoose Model Part// Apply JWT Authentication
router.post('/InsertStudent',TokenVerifyMiddleware, StudentsController.InsertStudent);
router.get('/SelectStudent',TokenVerifyMiddleware, StudentsController.SelectStudent);
router.post('/UpdateStudent/:id',TokenVerifyMiddleware, StudentsController.UpdateStudent);
router.post('/DeleteStudent/:id',TokenVerifyMiddleware, StudentsController.DeleteStudent);



//Practice JWT Token Encode-Decode
router.get('/CreateToken', JWTPractice.CreateToken);
router.get('/DecodeToken', JWTPractice.DecodeToken);



module.exports=router;