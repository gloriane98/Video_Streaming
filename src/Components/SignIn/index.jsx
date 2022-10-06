import React, { useState } from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from '../../ContextAccount'


const SignIn = () => {
  const clientId =
  '661962276208-2om69l5uusinqqej8ltkccv4q5jgg6hn.apps.googleusercontent.com'
const {userToken, setUserToken} = useContext(UserContext)
  console.log(userToken);
  const navigate = useNavigate();

const onSucces = (res) => {
  console.log('LOGIN success! Current user: ', res)
  navigate('/details')
  setUserToken(res.accessToken)
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
               isSignedIn={false}
               scope='https://www.googleapis.com/auth/youtube.force-ssl'
              />
           
          
        </div>
     </main>
    </>
  )
}

export default SignIn
