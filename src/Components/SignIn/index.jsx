import React, { useEffect } from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'


const SignIn = () => {
const {attachSignin}=useContext(UserContext)

  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
           <div id="started" onClick={attachSignin}>
            Sign in with Google
           </div>
          
        </div>
     </main>
    </>
  )
}

export default SignIn
