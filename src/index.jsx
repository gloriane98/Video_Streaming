import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; 
import "./index.css"
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="111468697943-l21kkds6hnfm4hvttdrj3n0jkdqet414.apps.googleusercontent.com"><App/></GoogleOAuthProvider>
	</React.StrictMode>
)