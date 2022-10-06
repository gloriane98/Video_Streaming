import React from 'react'
import './Sidebar.css'
import icons from '../../images/icons_subscription.svg'
import fluent from '../../images/fluent_library-16-filled.svg'
import trending from '../../images/fluent_data-trending-16-filled.svg'
import {Link} from 'react-router-dom'
import Logout from '../Logout'



const Sidebar = () => {
  return (
    <>
      <div className="sidecontainer">
        <div className="sidebarMenu">
           <Link className="home" to='/details'>
           <i className="fa-solid fa-house"></i> 
           <span>Home</span>
           </Link>
           <Link className="subcribe" to='/subcribe'>
           <img src={icons} alt="icons subcription" />
           <span className='abonner'> Subscription</span>
           </Link>
           <Link className="liked" to='/like'>
           <i className="fa-solid fa-thumbs-up"></i> 
           <span className='like'> Liked</span>
           </Link>
           <Logout/>
        </div>
      </div>
    </>
  )
}

export default Sidebar
