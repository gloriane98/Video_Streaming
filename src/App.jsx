import './App.css'
import Home from './Components/Home'
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Details from './Components/Details'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';


export default function App() {
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
