import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'
import firebase from 'firebase/compat'
import { auth } from '../../firebase'



const Dashboard = () => {


  useEffect(()=>{
    const user= auth.currentUser;
    console.log(user);
  },[])

 
  return (
    <div className='detailscontainer'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Dashboard

