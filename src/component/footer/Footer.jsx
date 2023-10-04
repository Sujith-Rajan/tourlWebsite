import React,{useEffect}  from 'react'
import './Footer.css'
import video from '../../assets/footer.mp4'
import {FiSend,FiFacebook,FiChevronRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {BsGithub,BsInstagram} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(()=>{
    Aos.init({
      duration: 3000,
      easing: 'ease-in-sine'});
    },[])

  return(
    <section className='footer'>
      <div className="videoDiv">
       <video src={video} muted autoPlay loop type="video/mp4"></video>
       </div>
       <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>

          </div>
          <div data-aos="fade-up"className="inputDiv flex">
            <input type="text" placeholder='Enter email address' />
           <button className='btn flex' type='submit'>
            SEND <FiSend className='icon'/>
           </button>
          </div>
         
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdOutlineTravelExplore className='icon'/>Travel.
              </a>
            </div>
            <div data-aos="flip-left" className="footerParagraph" >
        Start planning your dream getaway with us today. 
        Whether you're craving relaxation, adventure,
         or cultural exploration,
         <b>Bonvoyage</b> is your gateway to a world of 
         incredible travel experiences. Pack your bags and 
         embark on your next adventure with us!
        </div>
        <div data-aos="fade-right" className="footerSocial  flex">
          <a href=""><BsGithub className='icon'/></a>
          <a href=""><FiFacebook className='icon'/></a>
          <a href=""><RiTwitterXLine className='icon'/></a>
          <a href=""><BsInstagram className='icon'/></a>
         </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
               Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
               Payment
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
               PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                RentaCar
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
               Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Oyo
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
               LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
               Paris
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Cairo
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Barcelona
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
              Bali
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                 HongKong
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>&#169;2023 sujit_rajan</small>
          </div>
        </div>
       
        

        <div   className='disclaimer'>
            <span>*This is an experimental work, 
              contents are collectd from internet</span>
          </div>
       </div>
    </section>
  )
}

export default Footer