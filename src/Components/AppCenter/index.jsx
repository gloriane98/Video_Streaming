import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard'
import VideoPop from '../VideoPop'



const AppCenter = () => {
  return (
    <>
    <div className="AppContainer">
     <Dashboard/>
     {/* <VideoPop/> */}
      <Outlet/>
    </div>
    </>
  )
}


export default AppCenter
