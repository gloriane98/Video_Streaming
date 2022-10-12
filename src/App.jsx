import './App.css'
import SignIn from './Components/SignIn';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { useState, useEffect} from 'react'
import {UserContext} from  "./ContextAccount"
import { gapi, loadAuth2 } from 'gapi-script'
import VideoLikes from './Components/VideoLikes';
import SubcribeVideo from './Components/SubcribeVideo';
import ListVideoChannel from './Components/ListVideoChannel';




export default function App() {
        const [loginState,setLoginState]=useState(false)
        const [userToken, setUserToken]= useState("")
        let token = window.localStorage.getItem('token')

        const clientId =
        '661962276208-2om69l5uusinqqej8ltkccv4q5jgg6hn.apps.googleusercontent.com'

      const navigate = useNavigate()
      useEffect(() => {
        const setAuth2 = async () => {
          const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
          if (auth2.isSignedIn.get()) {
              updateUser(auth2.currentUser.get())
      
          } else {
              attachSignin(document.getElementById('started'), auth2);
          }
        }
        setAuth2();
      }, []);
      const attachSignin = (element, auth2) => {
        auth2.attachClickHandler(
          element,
          {},
          (googleUser) => {
            updateUser(googleUser);
          },
          (error) => {
            console.log(JSON.stringify(error));
          }
        );
      };
      const updateUser= (user)=>{
        console.log(user);
        console.log(token);

        localStorage.setItem('token',user.xc.access_token)
        setUserToken(token)
        navigate('/dashboard')

        const profileImg = user.getBasicProfile().getImageUrl();
        localStorage.setItem('image',profileImg)
       
    
      }
  return (
    <>
  
    <UserContext.Provider value={{loginState,setLoginState,userToken,setUserToken,attachSignin,token}}>
      <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/dashboard/' element={<Dashboard/>} />
          <Route path='/videoview/:videoId' element={<Videoview/>}/>
          <Route path='/searchpage/' element={<SearchPage/>}/>
          <Route path='/like/' element={<VideoLikes/>}/>
          <Route path='/subcribe' element={<SubcribeVideo/>}/>
          <Route path='/listvideochannel/:channelId' element={<ListVideoChannel/>}/>
          </Routes>
    </UserContext.Provider> 
    </>
  )
}
