import React,{useEffect} from "react";
import "./Main.css";

import { data } from "../../data";
import { ImLocation2 } from "react-icons/im";
import {BsClipboard2Check} from "react-icons/bs"

import Aos from 'aos'
import 'aos/dist/aos.css'

function Main() {

    useEffect(()=>{
    Aos.init({
        duration: 2000});
      },[])

    return (
        <section className="main container section">
            <div data-aos="fade-right"className="secTitle">
                <h3 className="title">Most visited destination</h3>
            </div>
            <div className="secContent grid" >
                {data.map((item) => {
                    return (
                        <div key={item.id} className="singleDestination">
                            <div className="imageDiv" data-aos="fade-up">
                                <img src={item.imgSrc} alt={item.destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle"> {item.destTitle}</h4>
                                <span className="continent flex">
                                    <ImLocation2 className="icon" />
                                    <span className="name">{item.location}</span>
                                </span>
                                <div className="fees flex">
                                  <div className="grade">
                                    <span>{item.grade}<small>+1</small></span>
                                  </div>
                                  <div className="price">
                                    <h5>&#8377;{item.fees}</h5>
                                  </div>
                                  
                                </div>
                                <div className="desc">
                                    <p>{item.description}</p>
                                  </div>
                                  <button className="btn flex">
                                    DETAILS<BsClipboard2Check className="icon"/>
                                  </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Main;
