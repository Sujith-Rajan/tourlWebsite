import React from 'react'
import './Home.css'
import video from '../../assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram,BsListTask} from 'react-icons/bs'
import {BiLogoTripAdvisor} from 'react-icons/bi'
import {TbAppsFilled} from 'react-icons/tb'

function Home() {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent Container">
        <div className="textDiv">

          <span className="smallText">Our packages</span>

          <h1 className='homeTitle'>
            Search Your Holiday
          </h1>
          
        </div>

        <div className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
                <GrLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="">Select your date</label>
            <div className="input flex">
              <input type="date" />
           </div>
          </div>

          <div className="priceInput">
          <div className="labelTotal flex">
            <label htmlFor="price">Max price:</label>
            <h3 className='total'>&#8377;5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max='5000' min='1000' />
           </div>
          </div>
           
        <div className="searchOption flex">
            <HiFilter className='icon'/>
            <span>More Filters</span>
        </div>
            

        </div>
        <div className="homeFooterIcon flex">
          <div className="rightIcons">
           <FiFacebook className='icon'/>
           <BsInstagram className='icon'/>
           <BiLogoTripAdvisor className='icon'/>
          </div>
          <div className="leftIcons">
          <BsListTask className='icon'/>
          <TbAppsFilled className='icon'/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home