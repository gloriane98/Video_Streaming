import React from 'react'
import './Navbar.css'
import icons from '../../images/iconsNavbar.png'
import {Link} from 'react-router-dom'
import Searchbar from '../Searchbar'
import Logout from '../Logout'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'




const Navbar = () => {
  let userImg=window.localStorage.getItem('image')
  let {loginState} = useContext(UserContext)
  
  return (
    <>
     <nav>
       
       <Link className="content" to='/'>
        <img src={icons} alt="logo" className='logo' />
        <span className='title'>SmartView</span>
       </Link>
        <Searchbar/>
        <div className="avatar-bloc">
        <div className="bell">
          <Logout/>
              </div>
            <div className="avatar">
              <img src={userImg} alt="user" className='avatar-user' />
            </div>
        </div>
   
    </nav> 
    
    </>
  )
}

export default Navbar
