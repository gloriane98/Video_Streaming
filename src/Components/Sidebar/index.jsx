import React from 'react'
import './Sidebar.css'
import icons from '../../images/icons_subscription.svg'
import fluent from '../../images/fluent_library-16-filled.svg'
import trending from '../../images/fluent_data-trending-16-filled.svg'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
      <div className="sidecontainer">
        <div className="sidebarMenu">
           <Link className="home" to='/details'>
           <i class="fa-solid fa-house"></i> 
           <span>Home</span>
           </Link>
           <Link className="subcribe" to='/subcribe'>
           <img src={icons} alt="icons subcription" />
           <span className='abonner'> Subscription</span>
           </Link>
           <Link className="histories" to='/history'>
           <i class="fa-solid fa-clock-rotate-left"></i>
           <span className='history'> History</span>
           </Link>
           <Link className="libraries" to='/library'>
           <img src={fluent} alt="icons library" />
           <span className='library'>  Library</span>
           </Link>
           <Link className="liked" to='/like'>
           <i class="fa-solid fa-thumbs-up"></i> 
           <span className='like'> Liked</span>
           </Link>
           <Link className="trend" to='/trending'>
           <img src={trending} alt="icons Trending" />
           <span className='trending'>Trending</span>
           </Link>
           <Link className="set" to='/setting'>
           <i class="fa-solid fa-gear"></i> 
           <span className='setting'>  Setting</span>
           </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
