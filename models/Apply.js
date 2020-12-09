const mongoose = require("mongoose");

const ApplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateofbirth:{
      type:Date,
  },
  mobile: {
    type: String,
    required: true
  },
  address:{
      type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Apply", ApplySchema);