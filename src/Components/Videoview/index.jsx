import React from 'react'
import Navbar from '../Navbar'
import './Videoview.css'
import video from '../../images/view_video.png'
import Sidebar from '../Sidebar'


const Videoview = () => {
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <div className="vidvicontainer">
     <div className="vidvicontent">
     <div className="left">
      <img src={video} alt="video" />
    </div>
        
     </div>
     </div>
    </>
  )
}

export default Videoview
