import React from 'react'
import { Outlet } from 'react-router-dom'


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
