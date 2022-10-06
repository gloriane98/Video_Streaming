import React, { useEffect } from 'react'
import './SignIn.css'
import icons from '../../images/iconsAccueil.png'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'


const SignIn = () => {
  const {userToken,setUserToken}=useContext(UserContext);
  const clientId =
  '661962276208-2om69l5uusinqqej8ltkccv4q5jgg6hn.apps.googleusercontent.com'
const navigate = useNavigate()
useEffect(() => {
  const setAuth2 = async () => {
    const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube.force-ssl')
    if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())

    } else {
        attachSignin(document.getElementById('started'), auth2);
    }
  }
  setAuth2();
}, []);
const attachSignin = (element, auth2) => {
  auth2.attachClickHandler(element, {},
    (googleUser) => {
      updateUser(googleUser);
    }, (error) => {
    console.log(JSON.stringify(error))
  });
};
const updateUser= (user)=>{
  // console.log(user.xc.access_token);
  //localStorage.setItem('token',)
  setUserToken(user.xc.access_token)
  navigate('/details')
}

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
