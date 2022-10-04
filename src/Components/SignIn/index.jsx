import React from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import {Link} from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from "jwt-decode"
/* import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios' */


const SignIn = () => {
/*   const login=useGoogleLogin({
    onSuccess: async tokenResponse =>{
   const data= await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers:{
          "Authorization":`Bearer ${tokenResponse}`
        }
      })
      console.log(data);
    } 
    
  }); */

  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src={icons} alt="logo" />
            <h1>SmartView</h1>
            
                <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse.credential);
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log(decoded)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                />
                
            {/* <span onClick={login}>
                  <i className='fa-brands fa-google'></i>
                  continue with google
                </span> */}
            <Link to='/details' className="started">
            </Link>
            
        </div>
     </main>
    </>
  )
}

export default SignIn
