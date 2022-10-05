import React, { useState } from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import {Link} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import Logout from '../Logout'


const SignIn = () => {
  const clientId =
  '111468697943-l21kkds6hnfm4hvttdrj3n0jkdqet414.apps.googleusercontent.com'
  const [userToken, setUserToken]= useState("")


const onSucces = (res) => {
  console.log('LOGIN success! Current user: ', res)
  setUserToken(res.accessToken)
  console.log(res.accessToken);
  console.log(res.profileObj)
}

const onFaillure = (res) => {
  console.log('LOGIN FAILLURE! res:', res)
}
  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
         
                 <GoogleLogin  className="started"
               clientId={clientId}
               buttonText="Sign in with Google"
               onSuccess={onSucces}
               onFailure={onFaillure}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
            />
            <Logout/>
            <Link to='/details'>
            </Link>
            
        </div>
     </main>
    </>
  )
}

export default SignIn
