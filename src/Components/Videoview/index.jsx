import React,{ useState } from 'react'
import Navbar from '../Navbar'
import './Videoview.css'
// import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom'
import IframeVideo from '../IframeVideo'
// import {Link} from 'react-router-dom'



const Videoview = () => {
  // let {searchQuery}=useParams()
  let {videoId}= useParams()
 
  


  return (
    <>
     <Navbar/>
     
     <div className="vidvicontainer">
        <div className="vidvicontent">
                <IframeVideo videoId={videoId} />
        </div>
     
        <div></div>
     </div>
    </>
  )
}

export default Videoview
