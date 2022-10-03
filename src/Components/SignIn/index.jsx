import React from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import {gapi} from 'gapi-script'

const SignIn = () => {
  const clientId="111468697943-l21kkds6hnfm4hvttdrj3n0jkdqet414.apps.googleusercontent.com";
  useEffect(()=>{
    const start= () =>{
      gapi.client.init({
        clientId : clientId,
        scope: ""
      });
    }
    gapi.load('client: auth2', start);
  });
  const onSuccess = (res)=>{
    console.log(res)
  }
  const onFaillure = (res)=>{
    console.log(res);
  }
  const onLogoutSuccess = () => {
  console.log('SUCESS LOG OUT');
};
 
  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
            <Link to='/details' className="started">
              
            <GoogleLogin 
              clientId={clientId}
              buttonText="Connect with Google"
              onSuccess={onSuccess}
              onFailure={onFaillure}
              isSignedIn={true}
              />
              </Link>
              <GoogleLogout 
                clientId={clientId}
                onLogoutSuccess={onLogoutSuccess}
              />
        </div>
     </main>
    </>
  )
}

export default SignIn
