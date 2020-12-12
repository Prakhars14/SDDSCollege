const express = require('express');
const router = express.Router();
const AWS=require("aws-sdk");
const auth=require('../middleware/auth');
require('dotenv').config();
const {v4: uuidv4 }=require("uuid");

const s3=new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey:process.env.SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: 'ap-south-1'
})

router.get("/",auth,(req,res)=>{
    const key=`${req.user.id}/${uuidv4()}.jpeg`;

    s3.getSignedUrl('putObject',{
        Bucket: 'sddscollege',
        ContentType: 'image/jpeg',
        Key: key
    },(err,url)=>res.send({key,url}));
});


module.exports=router;