const News=require('../models/News');

exports.addNews = async (req, res, next) => {
    
    const {name, desc}=req.body;
    console.log(name, desc);
    try{
        const news = await News.create({
            name:name,
            description:desc,
          });
      
          res.status(200).json({
            success: true,
            data: news
          });
    }
    catch(e){
        console.log(e);
    }

  
  };

  exports.getNews = async (req, res, next) => {
  
    const candidates = await News.find()

    res.status(200).json({
      success: true,
      data: candidates
    });
  
  };