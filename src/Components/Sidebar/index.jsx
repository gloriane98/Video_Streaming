import React from 'react'
import './Sidebar.css'
import icons from '../../images/icons_subscription.svg'
import { Link, NavLink } from 'react-router-dom'



const Sidebar = () => {
  let backGroundActive = { background:  "#000000" }
  return (
    <>
      <div className="sidecontainer">
        <div className="sidebarMenu">
          <NavLink className="home" to='/pop' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-house"></i>
            <span>Popular</span>
          </NavLink>
          <NavLink className="subcribe" to='/subcribe' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <img src={icons} alt="subcription" />
            <span className='abonner'> Subscription</span>
          </NavLink>
          <NavLink className="liked" to='/like' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-thumbs-up"></i>
            <span className='like'> Like</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar
