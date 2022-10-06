import React, { useState,useEffect } from 'react'
import './VideoFav.css'
// import image from '../../images/images.png'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"


const VideoFav = () => {
const [video, setVideo] = useState([])
const {userToken, setUserToken} = useContext(UserContext)
const fecthVideoPopular = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    setVideo(data)
  })
}
console.log(userToken);
useEffect(()=>{
  fecthVideoPopular();
},[])
console.log(video);
  return (
    <>
    <div className="videocontainer">

     <Link className="card1" to='/videoview'>
            <img src="" alt="" />
              <div className="item1">
               <div className="text">
               <p className="title-video">
              </p>
                  <p className="number-vue">  <span className="timer"></span> </p>
               </div>
              </div>
          </Link>
    </div>
  {/*   {video.map((data, index)=>{
      return(
     <div className="videocontainer">

     <Link className="card1" to='/videoview'>
            <img src="" alt="" />
              <div className="item1">
               <div className="text">
               <p className="title-video">
              </p>
                  <p className="number-vue">  <span className="timer"></span> </p>
               </div>
              </div>
          </Link>
    </div>
      )
        
    })} */}
    
    </>
  )
}

export default VideoFav
