import React, { useState,useEffect } from 'react'
import '../../CardElements.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"
import Loader from '../Loader'


const VideoPop = () => {

const [video, setVideo] = useState([])
const [loading,setLoading]=useState(true)
let token = window.localStorage.getItem('token')

const fecthVideoPopular = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI&access_token='+token)
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
},[token])

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
