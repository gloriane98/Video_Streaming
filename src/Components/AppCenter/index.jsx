import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const AppCenter = () => {
  return (
    <>
    <div className="">
     
      <Outlet/>
    </div>
    </>
  )
}


export default AppCenter
