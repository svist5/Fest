// import { Card, CardHeader, CardBody, CardFooter , Stack, Heading,Button,Image,Text,Box} from '@chakra-ui/react';
import Header from "./header"
import Footer from "./footer"
import Details from './programDetails';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Member=()=>
{
    const [events,setEvents]=useState([]);
    const allEvents=async()=>{
        try{
            const res = await axios.get(
                'http://localhost:3000/api/user/allmembers',
              )
              console.log(res.message)
              if(res.status===201)
                setEvents(res.data)
             else{

                const new_data=[{
                    pic:"https://miro.medium.com/v2/resize:fit:1400/1*-l1N7X9SzFGgid_WQrWphQ.png",
                    name:"Hey",
                    description:"No members added",
                    about:"Current no members has been added!"
                    },
                ]
                console.log(new_data)
                    setEvents(new_data);
             }
        }
        catch(err){
            console.log(err)
            const new_data=[{
                "pic":"https://miro.medium.com/v2/resize:fit:1400/1*-l1N7X9SzFGgid_WQrWphQ.png",
                "name":"Hey",
                "description":"No members added",
                "about":"Current no members has been added!"
                },
            ]
            console.log(new_data)
            setEvents(new_data);
        }
    }
    useEffect(()=>{
        allEvents();
    },[]);
    return (
    <div style={{backgroundColor:"black"}}>
        <Header></Header>
        <br></br>
        <div className="program_details_area detials_bg_1 overlay2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center mb-80  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <h3>Member's Area</h3>
                    </div>
                </div>
            </div>
    {
        events.map((value,index)=>(
        <Details pic={value.pic} name={value.name} key={index} index={index} description={value.description} about={value.about}></Details>
        ))
        }
          </div>
    </div>
        <Footer></Footer>
    </div>
    )
}
export default Member;