const express = require('express');
const app=express();
const userRoute = require('./routes/userRoute');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');
env.config();
app.use(express.json());
app.use( '/api/user' ,userRoute)

let port = process.env.PORT || 4000;

// database here

mongoose.connect(process.env.MONGO_URL).then(()=>{ 
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
}); 


// controllers here


app.listen(port,()=>{
    console.log('Server is running on port ',port);
});