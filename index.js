

const express= require("express");
const app= express();

require("dotenv").config();
const PORT =process.env.PORT||5000;

app.use (express.json());

const blog=require("./routes/blog");

app.use("/api/v1",blog);

const connectwithDB=require("./config/database");
connectwithDB();

app.listen(PORT,() =>{
    console.log(`started successfully at ${PORT} `);
})

app.get("/",(req ,res) =>{
    res.send(`this is homepage`);
})

