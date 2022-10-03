import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; 
import "./index.css"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Details from './Components/Details'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}/>
			<Route path='/details' element={<Details/>}/>
			<Route path='/videoview' element={<Videoview/>}/>
			<Route path='/searchpage' element={<SearchPage/>}/>
		</Routes>
		
		
		</BrowserRouter>
	</React.StrictMode>
)