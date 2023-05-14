const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors=require("cors");
const connectDB=require("./db")
const cookieParser = require('cookie-parser')
const port=process.env.PORT
const userRoutes=require("./routes/userRoutes")
const Authenticate=require("./middleware/auth")


connectDB();
app.use(cookieParser());
app.use(cors({ 
    origin: 'https://64613c140a4148449cb99dcc--statuesque-squirrel-9c1a70.netlify.app/', // Replace with your frontend domain
    credentials: true // Enable cookies and other credentials in CORS requests
  }));
app.use(express.json());
app.use("/api/user",userRoutes)

// app.post("/api/user",async(req,res)=>{
//     const{name,email}=req.body;
//     const userExists=await User.findOne({email:email});
//     if(userExists){
//         res.status(400);
//         throw new Error("User already Exixts!");
//     }
//     const newUser=await User.create({
//         name,
//         email
//     });
//     if(newUser){
//         res.status(201).json({
//             name:newUser.name,o
//             email:newUser.email
//         })
//     }
//     else{
//         throw new Error("Failed to create new User");
//     }

// })
app.get("/register",Authenticate,(req,res)=>{
    // console.log("Hello from Home!");
    console.log(req.rootUser);
    if(req.rootUser)
        res.status(201);
    else{
        res.status(400);
        throw new Error("NOt authorized")
    }
})
app.listen(port,(req,res)=>{
    console.log("Server is running at port!"+port);
})