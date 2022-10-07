import React, { useState,useEffect } from 'react'
import './VideoFav.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"
import Loader from '../Loader'



const VideoFav = () => {
    const [loading,setLoading]= useState(true)
    const [videos, setVideo] = useState([])
    const {userToken, setUserToken} = useContext(UserContext)
 const fecthVideoPopular = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=45&myRating=like&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    setVideo(data)
    setLoading(false)
  })
}
console.log(userToken);
useEffect(()=>{
  fecthVideoPopular();
},[])
console.log(videos.items);
  return (
    // <>
      <div className="videocontainer">
        {
          !videos?
          videos.items.map((video)=>{
            (

        <Link className="card1" to='/videoview'>
                <img src={video.snippet.thumbnails} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                {video.snippet.channelTitle}
                </p>
                <p className="number-vue">  <span className="timer"></span> </p>
             </div>
            </div>
        </Link>
            )

          }):<Loader/>
        }
      </div>
    // </>
  )
}

export default VideoFav
