const Faculty=require('../models/Faculty');

exports.addFaculty = async (req, res, next) => {
    console.log(req.body);

    const candidate = await Faculty.create({
      name:req.body.name,
      imageURL:req.body.image,
      qualification:req.body.qual
    });

    res.status(200).json({
      success: true,
      data: candidate
    });
  
  };

  exports.getFaculty = async (req, res, next) => {
  
    const candidates = await Faculty.find()

    res.status(200).json({
      success: true,
      data: candidates
    });
  
  };