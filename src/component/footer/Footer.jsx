import React from 'react'
import './Footer.css'
import video from '../../assets/footer.mp4'
import {FiSend} from 'react-icons/fi'
function Footer() {
  return(
    <section className='footer'>
      <div className="videoDiv">
       <video src={video} muted autoPlay loop type="video/mp4"></video>
       </div>
       <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>

          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter email address' />
           <button className='btn flex' type='submit'>
            SEND <FiSend className='icon'/>
           </button>
          </div>
          <div>
            <span>This is an experimental work, 
              contents are collectd from internet</span>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Footer