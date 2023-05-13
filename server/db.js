const mongoose=require("mongoose");
const connectDB=async()=>{

    try{
        const conn=await mongoose.connect("mongodb+srv://websitesvist:p1TyAnXC1ZTNmTyr@cluster0.enlfm1m.mongodb.net/techFest",{
            useNewUrlParser: true,
          
    });
    console.log("MongoDB connected:"+conn.connection.host)
    }
    catch(error){
        console.log(error)
    }
}
module.exports=connectDB
