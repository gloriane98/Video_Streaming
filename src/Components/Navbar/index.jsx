import React from 'react'
import './Navbar.css'
import icons from '../../images/iconsNavbar.png'
import avatar from '../../images/BMP04336-Modifier.jpg'
import {Link} from 'react-router-dom'
import Searchbar from '../Searchbar'


const Navbar = () => {
  return (
    <>
     <nav>
       
       <Link className="content" to='/dashboard'>
        <img src={icons} alt="logo" className='logo' />
        <span className='title'>SmartView</span>
       </Link>
        <Searchbar/>
        <div className="avatar-bloc">
              
        <div className="bell">
              <span><i className="fa-solid fa-bell "></i></span>
              </div>
            <div className="avatar">
              <img src={avatar} alt="user" className='avatar-user' />
            </div>
        </div>
   
    </nav> 
    
    </>
  )
}

export default Navbar
