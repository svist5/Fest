import NewCard from './eventCard';
import axios from "axios"
import { useEffect, useState } from "react";
import Footer from './footer';
import Header from "./header";
const UpdatedEvents=()=>{
    const [events,setEvents]=useState([])
    const allEvents=async()=>{
        try{
            const res = await axios.get(
                'http://localhost:3000/api/user/allevents',
              )
              setEvents(res.data)
            //   console.log(res.data)
            //   if(res.status===201){
            //     const new_data=res.data;
            //     console.log("This is")
            //     console.log(new_data)
            //     setEvents(new_data)
            //   }
            //   console.log("eheheh")
            //   console.log(events)
        }
        catch(err){
            console.log(err)
            const new_data=[{
                "pic":"https://miro.medium.com/v2/resize:fit:1400/1*-l1N7X9SzFGgid_WQrWphQ.png",
                "name":"Hey",
                "title":"No events",
                "date":false,
                "price":"We will be back soon, STRONGER!",
                },
            ]
                setEvents(new_data);
        }

        
    }
   
    useEffect(()=>{
        allEvents();
    },[]);

    return (
        <>
        <Header></Header>
    <div style={{backgroundColor:"black"}}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        {events.map((value)=>(
            <NewCard img={value.pic} date={value.date}   title={value.name} quote={value.title} price={value.price}></NewCard>
        ))}
    </div>
    <Footer></Footer>
    </>

    )
}
export default UpdatedEvents;