import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'
import './Login.css'
import { Navigate } from 'react-router-dom'

const Login = () => {
const {signInWithGoogle, userToken}=useContext(UserContext)
if(userToken){
    <Navigate to="/home"/>
}

  return (
    <div id="started" onClick={signInWithGoogle}>
            Sign in with Google
    </div>
  )
}

export default Login
