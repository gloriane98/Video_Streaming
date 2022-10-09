import React from 'react'
import Navbar from '../Navbar'
import './Videoview.css'
import Sidebar from '../Sidebar'


const Videoview = () => {
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <div className="vidvicontainer">
     <div className="vidvicontent">
     <div className="left">
      <iframe src='' title="youtube video" allowFullScreen/>
    </div>
        
     </div>
     </div>
    </>
  )
}

export default Videoview
