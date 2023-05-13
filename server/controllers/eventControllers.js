const Event=require("../models/eventModel")
const eventRegister=async(req,res)=>{
    const {name,price,new_date,pic,title,bandpic,bandtitle}=req.body.data;
    const date=new_date;
    const eventExist=await Event.findOne({name});
    if(eventExist){
        console.log(eventExist);
        res.status(400);
        throw new Error("Event already exist with the same name and title");
    }
    const new_event=await Event.create({
        name,
        price,
        title,
        date,
        pic,
        bandpic,
        bandtitle
    })
    if(new_event){
        res.status(201).json({
            name,
            price,
            title,
            date,
            pic,
        })
    }
    else{
            res.status(400);
            throw new Error("Error! Failed to create new event");
    }
    // events.forEach((value)=>{
    //     if(value.date<date)
    //         console.log(value);
    // })
}
const getEvents=async(req,res)=>{
    const filter = {}
    const  events=await Event.find(filter);
    if(events.length>0){
        res.status(201);
        res.send(events)
}
    else{
        res.status(400)
        throw new Error("No data found!")
    }
}
module.exports={eventRegister,getEvents};