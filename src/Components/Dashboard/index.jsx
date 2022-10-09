import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoPop from '../VideoPop'

const Details = () => {
  return (
    <div className='detailscontainer'>
     <Navbar/>
      <Sidebar/>
      <VideoPop/>
    </div>
  )
}

export default Details
