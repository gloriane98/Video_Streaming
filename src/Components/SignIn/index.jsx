import React, { useEffect } from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import Login from '../Login'


const SignIn = () => {


  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
             <Login/>
          
        </div>
     </main>
    </>
  )
}

export default SignIn
