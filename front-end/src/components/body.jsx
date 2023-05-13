
import { useState,useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
const Body=()=>{
    return(<>

<div style={{backgroundColor:"black"}}>
        <Header></Header>
        <br></br>
        <div className="program_details_area detials_bg_1 overlay2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center mb-80  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <h3>ENTHUZEA 2023</h3>
                    </div>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="program_detail_wrap">
                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">Musical Bands</span>
                                    <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">We bring top Musical bands</h4>
                                </div>
                                <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/1.jpg" alt=""></img>
                                </div>
                                <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">“The only truth is music.”</h4>
                            </div>
                        </div>
                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Fashion Show</span>
                                    <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">Intra College Competetion</h4>
                                </div>
                                <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/2.jpg" alt=""></img>
                                </div>
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">"Clothes mean nothing until someone lives in them."</h4>
                            </div>
                        </div>
                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">Singing Competetion</span>
                                    <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Intra College Competetion</h4>
                                </div>
                                <div className="thumb  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/3.jpg" alt=""></img>
                                </div>
                                <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">“Where words fail, music speaks.”</h4>
                            </div>
                        </div>
                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Dancing Competetion</span>
                                    <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">Intra College Competetion</h4>
                                </div>
                                <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/4.jpg"  alt=""></img>
                                </div>
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">"Dancing connects your body with your soul"</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
    </div>
        <Footer></Footer>
    </div>
    
    </>)
}
export default Body;