const Academics=require('../models/Academics');

exports.addCourse = async (req, res, next) => {
    
    const {dept, course}=req.body;
    console.log(dept, course);
    try{
        const Course = await Academics.create({
            department:dept,
            course:course,
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

  exports.getCourse = async (req, res, next) => {
  
    const candidates = await Academics.find()

    res.status(200).json({
      success: true,
      data: candidates
    });
  
  };