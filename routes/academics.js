const express = require('express');
const router = express.Router();
const {getCourse, addCourse}=require('../controllers/academics');

const auth=require('../middleware/auth');

router
    .route('/')
    .get(getCourse)
    .post(auth,addCourse);


module.exports=router;