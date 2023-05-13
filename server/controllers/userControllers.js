const User=require("../models/userModel");
const generateToken=require("../config/generateToken");
// const matchPassword=require("..")
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    // checking the response is correct or not
    if(!name|| !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    console.log("creating user!")
    const user =await User.create({
        name:name,
        email,
        password,
    })
    // user.generateToken();
    if(user){
        console.log("User created!");
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("failed to create user!");
    }
}
const authUser=async(req,res)=>{

    const {email,password}=req.body.data;
    const user=await User.findOne({email});
    
    if(user && await user.matchPassword(password)){
        // console.log(user);
        const token=generateToken(user._id);
        console.log(token);
        res.cookie('JaiBuddha', token, { maxAge: Date.now()+ 36000000 });
        // if(req.cookies.HareKrishna)
        //     console.log("Cookies generated!");

        // res.status(201).json({
        //     _id:user._id,
        //     name:user.name,
        //     email:user.email,
        //     pic:user.pic,
        //     token: generateToken(user._id),
        // })
        res.status(201);
        res.send("Cookies created successfully!")
    }
    else{
        res.status(400);
        throw new Error("Password didn't match!/Wrong credentials!");
    }
}
module.exports={registerUser,authUser}