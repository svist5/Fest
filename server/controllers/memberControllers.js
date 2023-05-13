const Member=require("../models/memberModel");
const registerMember=async(req,res)=>{
    const {name,description,about,pic}=req.body.data;
    if(!name|| !description || !about || !pic){
        res.status(400);
        throw new Error("Required fields not filled!");
    }
    const member=await Member.findOne({name});
    if(member){
        res.status(400);
        throw new Error("User already exists");
    };
    const new_member=await Member.create({
        name,
        description,
        about,
        pic
    });
    if(new_member){
        console.log("Member created!");
        res.status(201).json({
            _id:new_member._id,
            name:new_member.name,
        })
    }
    else{
        res.status(400);
        throw new Error("failed to create user!");
    }
}

const getMembers=async(req,res)=>{
    console.log("ho")
    const filter = {}
    const  members=await Member.find(filter);
    if(members.length>0){
        res.status(201);
        res.send(members)
}
    else{
        res.status(400);
        res.send("No members found!")
        // throw new Error("No data found!")
    }
}
module.exports={registerMember,getMembers};