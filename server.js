const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const path=require("path");

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/admin", require('./routes/admin'));
app.use('/api/faculty', require('./routes/faculty'));
app.use('/api/home',require("./routes/home"));
app.use('/api/academics',require("./routes/academics"));
app.use('/api/apply',require("./routes/apply"));

if(process.env.NODE_ENV === 'production') {
   
    app.use(express.static('client/build'));
  
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
  }

app.listen(process.env.PORT,()=>{
    console.log('Server started on port '+process.env.PORT);
})