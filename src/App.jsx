import './App.css'
import Home from './Components/Home'
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Details from './Components/Details'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { gapi } from 'gapi-script'
import { useEffect } from 'react'


export default function App() {
  const clientId =
   '111468697943-l21kkds6hnfm4hvttdrj3n0jkdqet414.apps.googleusercontent.com'
   useEffect(() => {
    function start() {
       gapi.client.init({
          clientId: clientId,
          scope: '',
       })
    }
    gapi.load('client: auth2', start)
 })

  return (
    <>
      {/* <Home/> */}
    <BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/details' element={<Details/>}/>
			<Route path='/videoview' element={<Videoview/>}/>
			<Route path='/searchpage' element={<SearchPage/>}/>
		</Routes>
		</BrowserRouter>
    </>
  )
}
