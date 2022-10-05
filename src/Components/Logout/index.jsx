import React from 'react'
import "./Logout.css"
import { GoogleLogout } from 'react-google-login'

const Logout = () => {
    const clientId =
    '111468697943-l21kkds6hnfm4hvttdrj3n0jkdqet414.apps.googleusercontent.com'
    const OnSuccess=()=>{
        console.log("logout successfully")
    }
  return (
    <>
    <div className="logout-btn">
    <GoogleLogout
         clientId={clientId}
         buttonText={'Sign up with Google'}
         onLogoutSuccess={OnSuccess}
     />
    </div>
      
    </>
  )
}

export default Logout
