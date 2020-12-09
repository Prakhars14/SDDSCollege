const express = require('express');
const router = express.Router();
const {getFaculty, addFaculty}=require('../controllers/faculty');
const auth=require('../middleware/auth');

router
    .route('/')
    .get(getFaculty)
    .post(auth,addFaculty);

module.exports=router;