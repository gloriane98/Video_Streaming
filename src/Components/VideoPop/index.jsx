import React, { useState,useEffect } from 'react'
import './VideoFav.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"
import Loader from '../Loader'


const VideoPop = () => {
const [video, setVideo] = useState([])
const {userToken, setUserToken} = useContext(UserContext)
const [loading,setLoading]=useState(true)
const fecthVideoPopular = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
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
// console.log(video.items);
  return (
    <>
    {/* <div className="videocontainer">

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
    </div> */}
    
  
  
 <div className="Popcontainer">
  {
    !loading ?
    video.items.map((video)=>{
      return(

     <Link className="card" to='/videoview'>
            <img src={video.snippet.thumbnails.medium.url} alt="" />
              <div className="items">
               <div className="text">
               <p className="title-video"> {video.snippet.channelTitle} </p>
               <p className="title-video"> {video.snippet.localized.title} </p>
               </div>
              </div>
          </Link>
          )
          
        }):<Loader/>} 
    </div> 
    
    
    
   
    
    </>
  )
}

export default VideoPop
