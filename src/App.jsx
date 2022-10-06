import './App.css'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom';
import Details from './Components/Details'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { gapi } from 'gapi-script'
import { useEffect,useState } from 'react'
import {UserContext} from  "./ContextAccount"


export default function App() {
        const [loginState,setLoginState]=useState(false)
        const [imgUrl, setImgUrl] = useState ("")
        const [userToken, setUserToken]= useState("")
  const clientId =
   '661962276208-2om69l5uusinqqej8ltkccv4q5jgg6hn.apps.googleusercontent.com'
   useEffect(() => {
    function start() {
       gapi.client.init({
          clientId: clientId,
          scope: ''
       })
    }
    gapi.load('client: auth2', start)
 })

  return (
    <>
      {/* <Home/> */}
    <UserContext.Provider value={{loginState,setLoginState,imgUrl,setImgUrl,userToken,setUserToken}}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/videoview' element={<Videoview/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
      </Routes>
    </UserContext.Provider> 
    </>
  )
}
