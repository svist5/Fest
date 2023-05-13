import { useState,useEffect } from "react"
import React from "react"
import axios from "axios"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Text
  } from '@chakra-ui/react'
  import { useMediaQuery } from "@chakra-ui/react";
import { useDisclosure} from "@chakra-ui/react"
import { useRef } from "react"
const Header=({color})=>{
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    const [mob,setMob]=useState('none')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [date,setDate]=useState("")
    const [countdown,setCountdown]=useState("")
    const mobNav=()=>{
        setMob("inline");
    }

    const nomobNav=()=>{
        setMob("none");
    }
    const allEvents=async()=>{
        try{
        const res = await axios.get(
          'http://localhost:3000/api/user/allevents',
        )
        const Data=res.data;
        setDate(Data[0].date);

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
            const timer=days+" d "+hours+" h "+minutes+" m "+ seconds+" s"
            setCountdown(timer)
          }, 1000);
          return () => clearInterval(interval);
    })
    return (<>
      <header >
        <div style={{backgroundColor:color}} className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3" style={{display:"inline"}}>
                                <div className="logo">
                                    <a href="/">
                                    {/* style={{borderRadius:"80px",width:"30%"}} */}
                                        <img  style={{width:isMobile?"30%":"31%",borderRadius:isMobile?"100px":"80px"}} margin="0px" padding="0px" src="./img/logo.png"  alt=""></img>
                                    </a>
                                </div>
                            </div>
                        {isMobile ?
                            <div className="col-xl-3 col-lg-3  d-lg-block">
                                               <div className="buy_tkt">
                                                   <div className="book_btn  d-lg-block"> 
                                         
                                     <Button style={{bottom:"100px"}} display={{  md: mob }} ref={btnRef} colorScheme='teal' onClick={onOpen}> 
                                        Open
                                    </Button>
                                    <Drawer
                                        isOpen={isOpen}
                                        placement='right'
                                        onClose={onClose}
                                        finalFocusRef={btnRef}
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader style={{color:"red",fontFamily:"jokerman"}}>ENTHUZEA</DrawerHeader>

                                        <DrawerBody>
                                            {/* <Input placeholder='Type here...' /> */}
                                            <div className="main-menu  d-lg-block" >
                                             <nav>
                                                 <ul id="navigation">
                                                     <li style={{padding:"1%"}}><a href="/members">Member</a></li>
                                                     <li style={{padding:"1%"}}><a href="/pasttour">Past Tour</a></li>
                                                     <li style={{padding:"1%"}}><a href="/about">About <i></i></a></li>
                                                     <li><a href="/events">Events</a></li>
                                                     <div className="buy_tkt">
                                                     <div className="book_btn  d-lg-block">
                                                        <a style={{fontSize:"120%"}} href="/">{countdown}</a>
                                                    </div>
                                                    </div>
                                                     {/* <a style={{fontSize:"120%"}} href="/">{countdown}</a> */}
                                                 </ul>
                                             </nav>
                                         </div>
                                        </DrawerBody>

                                        <DrawerFooter>
                                            <Button variant='outline' mr={3} onClick={onClose}>
                                            Cancel
                                            </Button>
                                            {/* <Button colorScheme='blue'>Save</Button> */}
                                        </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer> 
                                        {/* <a style={{fontSize:"120%"}} href="/">{countdown}</a> */}
                                    </div>
                                </div>
                            </div>  
                                         : 
                        <div className="col-xl-6 col-lg-6">
                                         <div className="main-menu d-none d-lg-block" >
                                             <nav>
                                                 <ul id="navigation">
                                                     <li style={{padding:"1%"}}><a style={{fontFamily:"Arial",fontWeight:"bold"}} href="/members">Member</a></li>
                                                     <li style={{padding:"1%"}}><a style={{fontFamily:"Arial",fontWeight:"bold"}}href="/pasttour">Past Tour</a></li>
                                                     <li style={{padding:"1%"}}><a style={{fontFamily:"Arial",fontWeight:"bold"}}href="/about">About <i></i></a></li>
                                                     {/* <li><a href="/blog">blog <i></i></a></li> */}
                                                     <li><a style={{fontFamily:"Arial",fontWeight:"bold"}} href="/events">Events</a></li>
                                                 </ul>
                                             </nav>
                                         </div>
                                     </div>
                                     } 
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block"> 
                                <div className="buy_tkt">
                                    <div className="book_btn d-none d-lg-block" style={{display:isMobile?"none":""}}>
                    
                                        <a style={{fontSize:"120%"}} href="/">{countdown}</a>
                                    </div>
                                </div>
                            </div>
                                    



                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>

    </>)
}
export default Header;