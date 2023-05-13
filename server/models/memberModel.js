const mongoose=require("mongoose");

const memberSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    about:{type:String,required:true},
    pic:{type:String,required:true},

},
{
    timestamps: true,
}
);



const Member=mongoose.model("Member",memberSchema);
module.exports=Member;