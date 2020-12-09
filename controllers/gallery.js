const Gallery=require('../models/Gallery');

exports.addImages = async (req, res, next) => {
    
    const {url}=req.body;
    try{
        const Images = await Gallery.create({
            ImageUrl:url
          });
      
          res.status(200).json({
            success: true,
            data: Images
          });
    }
    catch(e){
        console.log(e);
    }
  };

  exports.getImages = async (req, res, next) => {
  
    const candidates = await Gallery.find()

    res.status(200).json({
      success: true,
      data: candidates
    });
  
  };