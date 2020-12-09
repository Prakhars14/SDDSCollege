const Apply=require('../models/Apply');

exports.addApply = async (req, res, next) => {
    
    const {name,email,dob,mob,address}=req.body;
    try{
        const Course = await Apply.create({
            name:name,
            email:email,
            dateofbirth:dob,
            mobile:mob,
            address:address,
          });
      
          res.status(200).json({
            success: true,
            data: Course
          });
    }
    catch(e){
        console.log(e);
    }

  
  };

  exports.getApply = async (req, res, next) => {
  
    const candidates = await Apply.find()

    res.status(200).json({
      success: true,
      data: candidates
    });
  
  };