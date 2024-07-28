const { default: mongoose } = require("mongoose");

// database here
mongoose.connect(process.env.MONGO_URL).then(()=>{ 
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
}); 

exports.mongoose=mongoose;