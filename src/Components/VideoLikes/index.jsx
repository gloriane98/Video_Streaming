import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import '../../CardElements.css'
import {Link} from 'react-router-dom'


import Loader from '../Loader'

const VideoLikes = () => {
    const [videos, setVideo] = useState([])
    const [loading,setLoading]=useState(true)
    let token = window.localStorage.getItem('token')



    const fetchVideoLikes = ()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=44&myRating=like&key=${import.meta.env.VITE_APP_APIKEY}&access_token=`+token)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setVideo(data)
        setLoading(false)
    })
    }
    
    useEffect(()=>{
    fetchVideoLikes();
    },[token])

    return (
    <>
     
        <div className="main">
                <div className="videocontainer">
        {
            !loading ?
            videos.items?.map((video)=>{
            return(

            <Link key={video.id} className="cards" to={`/videoview/${video.id}`} >
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

export default VideoLikes
