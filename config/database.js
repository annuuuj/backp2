const mongoose = require("mongoose");

require ("dotenv").config();

const codewithDB =()=>{
    mongoose.connect(process.env.DATABASE_URL,{

        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connected successfully"))
    .catch((error)=>{
        console.log("DB facing issues");
        console.log(error);
        console.log("Server");
        process.exit(1);
    })
        

};

module.exports=connectwithDB;