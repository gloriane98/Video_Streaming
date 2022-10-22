import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import AppCenter from '../AppCenter'
import VideoPop from '../VideoPop'


const Dashboard = () => {
  return (
    <div className='detailscontainer'>
     <Navbar/>
      <Sidebar/>
      <VideoPop/>
      <AppCenter/>
  
    </div>
  )
}

export default Dashboard

