import Header from "./header"
import Footer from "./footer"
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "../adminPanel/Detailsnew"
import { Center, Square, Circle } from '@chakra-ui/react'
const Home=()=>{
    const [date,setDate]=useState("")
    const [countdown,setCountdown]=useState("")
    const allEvents=async()=>{
        try{
        const res = await axios.get(
          'http://localhost:3000/api/user/allevents',
        )
        const Data=res.data;
        setDate(Data[0].date);
        console.log(date);

    }
    catch(err){
        console.log(err);
    }

    }
    useEffect(()=>{
        allEvents();
        const interval = setInterval(() => {
            // counter
            var eventDate=new Date(date);
            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            const currentDate=new Date();
            console.log(currentDate)
            var distance=eventDate-currentDate
    
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            if(hours<10)
                hours=0+hours.toString();
            if(minutes<10)
                minutes=0+minutes.toString();
            if(seconds<10)
                seconds=0+seconds.toString();
            const timer=days+":"+hours+":"+minutes+": "+ seconds
            console.log(timer)
            setCountdown(timer)
          }, 1000);
          return () => clearInterval(interval);
    })
    return (
    <>
    <Header></Header>
    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="slider_text text-center">
                            <div className="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <img src="img/shape/shape_1.svg" alt=""></img>
                            </div>
                            <div className="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                                <img src="img/shape/shape_2.svg" alt=""></img>
                            </div>
                            <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontSize:"250%",fontFamily:"jokerman"}}>SVIST</span>
                            <br></br>
                            <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontSize:"250%",fontFamily:"jokerman"}}>welcomes you to</span>
                            <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">ENTHUZEA 2023</h3>
                            {/* <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">SVIST, Gobindapur</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
            {/* <a style={{fontSize:"120%"}} href="/">{countdown}</a> */}
            <Center color='white' style={{backgroundColor:"black"}}>
                <h1 style={{color:"red",padding:"0px",paddingBottom:"2%",margin:"0px"}}>CountDown Begins</h1>
            </Center>
           <Center> <Square  
           style={{width:"100%",padding:"0px",margin:"0px",fontSize:"5em"}} size='100px' bg='black' color='white'>
                {countdown}
            </Square>
            </Center>
                               
    <ProgramCard></ProgramCard>
    <Footer></Footer>
    </>
    )
}
export default Home;