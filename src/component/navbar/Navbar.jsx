import React,{ useState } from 'react'

import './Navbar.css'
import {MdOutlineFlightTakeoff} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'

function Navbar() {
  const [active, setActive] = useState('navBar')
  // navbar toggler
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }
  const CloseNav =()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="" className="logo">
                    <h1><MdOutlineFlightTakeoff className='icon'/>  Bonvoyage.</h1>
                </a>
            </div>
            <div className={active}>
              <ul className='navLists flex'>
                  <li className='navItem'>
                    <a href="" className='navLink'>Home</a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'>Packages</a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'>Shop</a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'>About</a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'>Pages</a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'></a>
                  </li>
                  <li className='navItem'>
                    <a href="" className='navLink'>News</a>
                  </li>
                  <button className="btn">
                    <a href="">BOOK NOW</a>
                  </button>
              </ul>
              <div className="closeNavbar" onClick={CloseNav}>
                <AiFillCloseCircle className='icon'/>
              </div>

            </div>
            <div className="togglerNavbar" onClick={showNav}>
             <BsThreeDotsVertical className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar