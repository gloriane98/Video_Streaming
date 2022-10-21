import React from 'react'
import './Navbar.css'
import icons from '../../images/iconsNavbar.png'
import {Link} from 'react-router-dom'
import Searchbar from '../Searchbar'
import Logout from '../Logout'





const Navbar = () => {
  let userImg=window.localStorage.getItem('image')
  return (
    <>
     <nav>
       
       <Link className="content" to='/dashboard'>
        <img src={icons} alt="logo" className='logo' />
        <span className='title'>SmartView</span>
       </Link>
        <Searchbar/>
        <div className="avatar-bloc">
            <div className="avatar">
              <img src={userImg} alt="user" className='avatar-user' />
            </div>
          <Logout />
        </div>
   
    </nav> 
    
    </>
  )
}

export default Navbar
