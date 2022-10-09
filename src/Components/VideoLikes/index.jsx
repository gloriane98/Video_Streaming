import React, { useState,useEffect } from 'react'
import './VideoLikes.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"
import Loader from '../Loader'

const VideoLikes = () => {
    const [videos, setVideo] = useState([])
    const {userToken, setUserToken} = useContext(UserContext)
    const [loading,setLoading]=useState(true)
    const fetchVideoLikes = ()=>{
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
    console.log(userToken);
    useEffect(()=>{
    fetchVideoLikes();
    },[])
    // console.log(videos.items);
  return (
    <>
      <Navbar/>
      <Sidebar/>
        <div className="mainLikes">
                <div className="videocontainer">
        {
            !loading ?
            videos.items.map((video)=>{
            return(

            <Link className="card1" to='/videoview'>
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                    <div className="item1">
                    <div className="text">
                    <p className="title-video"> {video.snippet.channelTitle} </p>
                    <p className="title-video"> {video.snippet.localized.title} </p>
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
