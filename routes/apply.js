const express = require('express');
const router = express.Router();
const {getApply, addApply}=require('../controllers/apply');

const auth=require('../middleware/auth');

router
    .route('/')
    .get(auth,getApply)
    .post(addApply);


module.exports=router;