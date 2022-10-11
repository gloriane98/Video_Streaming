import React, { useState,useEffect } from 'react'
import '../../CardElements.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"
import Loader from '../Loader'


const VideoPop = () => {

const [video, setVideo] = useState([])
const {userToken, setUserToken} = useContext(UserContext)
const [loading,setLoading]=useState(true)

const fecthVideoPopular = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    setVideo(data)
    setLoading(false)
  })
}
useEffect(()=>{
  fecthVideoPopular();
},[userToken])

return (
    <>
    <div className='main'>
 <div className="videocontainer">
  {
    !loading ?
    video.items?.map((video)=>{
      return(

     <Link key={video.id} className="cards" to={`/videoview/${video.id}`}>
            <img src={video.snippet.thumbnails.medium.url} alt="" />
                <div className="items">
                  <div className="texte">
                    <p > {video.snippet.channelTitle} </p>
                    <p > {video.snippet.localized.title} </p>
                  </div>
                </div>
          </Link>
          )
          
        }):<Loader/>} 
    </div> 
    </div>
    </>
  )
}

export default VideoPop
