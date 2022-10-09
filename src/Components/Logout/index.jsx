import React, {useEffect} from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom'
import { gapi, loadAuth2 } from 'gapi-script'


const Logout = () => {
  const nav = useNavigate()
  const clientId =
  '661962276208-2om69l5uusinqqej8ltkccv4q5jgg6hn.apps.googleusercontent.com'
  
useEffect(() => {
  const setAuth2 = async () => {
    const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube.force-ssl')
    if (auth2.isSignedIn.get()) {
        // console.log(auth2.currentUser.get())
    } 
  }
  setAuth2();
}, []);
    const signOut = () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        nav('/')
        console.log('User signed out.');
        window.localStorage.removeItem('token')
      });
    }
  return (
    <>
      <div id="btn-logout" onClick={signOut}>Sign out with Google</div>
      
    </>
  )
}

export default Logout
