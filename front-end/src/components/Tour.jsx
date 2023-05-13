import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    background,
  } from '@chakra-ui/react'
  import { Stack} from '@chakra-ui/react'
  import TourCard from './tourCard'
  import Header from './header'
  import Footer from './footer'
  import { useState } from 'react'
//   import Modal from 'react-bootstrap/Modal';
const Tour=()=>{
 const [theme,setTheme]=useState("black");

  
    return(<div >
    <Header color="black" ></Header>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <center><h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{color: theme,opacity:"0.9",fontSize:"4em",paddingTop:"4%"}}  onMouseOver={()=>{setTheme("red")}} onMouseLeave={()=>{setTheme("black")}}>Enthuzea 2K22</h3>
     </center>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/1.jpg"  text="All Performers"></TourCard>
    <TourCard img="/img/enthuzea 2022/2.jpg"  text="Miss Freshers"></TourCard>
    <TourCard img="/img/enthuzea 2022/3.jpg"  text="Drama"></TourCard>
    </Stack>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/4.jpg"   text="Cultural Show"></TourCard>
    <TourCard img="/img/enthuzea 2022/5.jpg" text="Musical Bands"></TourCard>
    <TourCard img="/img/enthuzea 2022/6.jpg"  text="Classical Drama"></TourCard>
    </Stack>
    <Footer></Footer>
    
    
    </div>)
}
export default Tour;