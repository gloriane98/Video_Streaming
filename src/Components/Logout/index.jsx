import React, {useEffect} from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'
import { signOut} from 'firebase/auth'
import {auth} from '../../firebase'


const Logout = () => {
  const {loginState}= useContext(UserContext)
  const navigate = useNavigate()

  const NavigateSignIn= ()=>{
    if (loginState) {
      signOut(auth);
     
    } else {
      navigate("/signin");
      localStorage.removeItem('image')
      localStorage.removeItem('token')
    }
  }

  return (
    <>
      <div id="btn-logout" onClick={NavigateSignIn}>LogOut</div>
      
    </>
  )
}

export default Logout
