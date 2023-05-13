const mongoose=require("mongoose");
const eventSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    title:{type:String,required:true},
    date:{type:Number,required:true},
    bandpic:{type:String},
    bandtitle:{type:String},
    pic:{type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAkF17mSK_Cms_WFqmZEo-kL1w3avj5qMngLNOGB2jw&s"}
},
{
    timestamps:true,
}
)
const Event=mongoose.model("Event",eventSchema);
module.exports=Event;