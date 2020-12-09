const mongoose=require('mongoose');

const AcademicsSchema=new mongoose.Schema({
    department:{
        type: String,
        required:true
    },
    course:{
        type: String,
        required:true,
    }
})

module.exports=mongoose.model('Academics', AcademicsSchema);