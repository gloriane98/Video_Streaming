import React from 'react'
import './Sidebar.css'
import {Link, NavLink } from 'react-router-dom'



const Sidebar = () => {
  let backGroundActive = { background:  "#46CFBD" }
  return (
    <>
      <div className="sidecontainer">
        <div className="sidebarMenu">
          <NavLink className="link" to='/subcribe' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-play"></i>
            <span className='abonner'> Subscription</span>
          </NavLink>
          <NavLink className="link" to='/like' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-thumbs-up"></i>
            <span className='like'> Like</span>
          </NavLink>
            <Link className='arrow-left' to='/' >
           <i class="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
