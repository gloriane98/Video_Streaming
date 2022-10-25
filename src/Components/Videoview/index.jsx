import React,{ useState } from 'react'
import './Videoview.css'
import { useParams } from 'react-router-dom'
import IframeVideo from '../IframeVideo'
// import {Link} from 'react-router-dom'
import VideoPop from '../VideoPop'
import VideoLikes from '../VideoLikes'
import Loader from '../Loader'



const Videoview = () => {
  // let {searchQuery}=useParams()
  let {videoId}= useParams();
  const [view , setView]= useState(true);
 
  


  // if(view && !videoId){
  //   return (
  //     <div>
  //       <Loader/>
  //     </div>)
  // }
  return (
    <>
     {/* { !view ? 
       (

     ):<Loader/> */}
     <div className="vidvicontainer">
        <div className="vidvicontent">
                <IframeVideo videoId={videoId} />
        </div>
     
        {/* <div className='ListeVideo'>
          <VideoPop className="container"/>
          <VideoLikes  className="container"/>
        </div> */}
     </div>
    
    </>
  )
}

export default Videoview
