const mongoose=require('mongoose');

const FacultySchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    imageURL:{
        type: String
    },
    qualification:{
        type: String
    }
})

module.exports=mongoose.model('Faculty', FacultySchema);