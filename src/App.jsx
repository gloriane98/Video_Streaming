import './App.css'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { useState } from 'react'
import {UserContext} from  "./ContextAccount"
import SignIn from './Components/SignIn';


export default function App() {
        const [loginState,setLoginState]=useState(false)
        const [imgUrl, setImgUrl] = useState ("")
        const [userToken, setUserToken]= useState("")
  
        

  return (
    <>
    {!userToken ?  <SignIn/>: 
    
    <UserContext.Provider value={{loginState,setLoginState,imgUrl,setImgUrl,userToken,setUserToken}}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/videoview' element={<Videoview/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
      </Routes>
    </UserContext.Provider> 
    }
    </>
  )
}
