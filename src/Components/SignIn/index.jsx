import React from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import {Link} from 'react-router-dom'


const SignIn = () => {
 
  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
            <Link to='/details' className="started">
              
           
              </Link>
           
        </div>
     </main>
    </>
  )
}

export default SignIn
