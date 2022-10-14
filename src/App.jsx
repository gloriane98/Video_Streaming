import './App.css'
import SignIn from './Components/SignIn';
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { useState, useEffect} from 'react'
import {UserContext} from  "./ContextAccount"
import VideoLikes from './Components/VideoLikes';
import SubcribeVideo from './Components/SubcribeVideo';
import ListVideoChannel from './Components/ListVideoChannel';
import {signInWithGoogle} from '../src/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase'



export default function App() {
        const [loginState,setLoginState]=useState(false)
        

        useEffect(()=>{
          onAuthStateChanged(auth,(data)=>{
            if(data){
              setLoginState(true);

            } else{
              setLoginState(false)
            }
          })
        },[loginState])

        
  return (
    <>
  
    <UserContext.Provider value={{signInWithGoogle,loginState}}>
      <Routes>
          <Route path='/' element={ !loginState ? <SignIn /> : <Navigate replace to={"/dashboard"}/>}/>
          <Route path='/dashboard/' element={<Dashboard/>} />
          <Route path='/videoview/:videoId' element={<Videoview/>}/>
          <Route path='/searchpage/:searchQuery' element={<SearchPage/>}/>
          <Route path='/like/' element={<VideoLikes/>}/>
          <Route path='/subcribe' element={<SubcribeVideo/>}/>
          <Route path='/listvideochannel/:channelId' element={<ListVideoChannel/>}/>
          </Routes>
    </UserContext.Provider> 
    </>
  )
}
