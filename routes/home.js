const express = require('express');
const router = express.Router();
const {getNews, addNews}=require('../controllers/news');
const {getImages, addImages}=require('../controllers/gallery');

const auth=require('../middleware/auth');

router
    .route('/news')
    .get(getNews)
    .post(auth,addNews);

router
    .route('/gallery')
    .get(getImages)
    .post(auth,addImages);

module.exports=router;