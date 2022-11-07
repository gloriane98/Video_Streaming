import React, { useState,useEffect } from 'react'
import '../../CardElements.css'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
import PageError from '../PageError'


const VideoPop = () => {

const [video, setVideo] = useState([])
const [loading,setLoading]=useState(true)
let token = window.localStorage.getItem('token')
const [isError,setIsError]=useState(false)


const fecthVideoPopular = ()=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=${import.meta.env.VITE_APP_APIKEY}&access_token=`+token)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    setVideo(data)
    setLoading(false)
  })
  .catch(()=> setIsError(true))
}
useEffect(()=>{
  fecthVideoPopular();
},[token])
if(isError){
  return( <PageError/>)
}


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
                    <h3 > {video.snippet.channelTitle} </h3>
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
