import React from 'react'
import Navbar from '../Navbar'
import './Videoview.css'
import {Link} from 'react-router-dom'
import video from '../../images/view_video.png'


const Videoview = () => {
  return (
    <>
     <Navbar/>
     <div className="vidvicontainer">
     <div className="vidvicontent">
     <div className="left">
      <img src={video} alt="video" />
    </div>
        <div className="right">
          
        </div>
     </div>
     </div>
    </>
  )
}

export default Videoview
