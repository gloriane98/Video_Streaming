import React from 'react'
import './Details.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoFav from '../VideoFav'

const Details = () => {
  return (
    <div className='detailscontainer'>
     <Navbar/>
      <Sidebar/>
      <VideoFav/>
    </div>
  )
}

export default Details
