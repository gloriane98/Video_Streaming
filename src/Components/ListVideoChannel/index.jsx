import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import { Link } from 'react-router-dom'

const ListVideoChannel = () => {
  
    const {channelId}=useParams()
    const [videoChannel,setVideoChannel]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=21&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk`)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setVideoChannel(data.items)
            setIsLoading(false)
        })
        .catch(()=> setIsError(true))
    },[])
    if(isError){
        return( <div>not found</div>)
    }
console.log(videoChannel)
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="recommendedvideos">
      {isLoading ? (
        <div >
          <Loader/>
        </div>
      ) : null}
      <div>
        {videoChannel.map((video,index) => {
            const videoId=video.id.videoId;
          return (
            <Link key={index} to={`/videoview/${videoId}`}>
              <div><img src={video.snippet.thumbnails.medium.url}  alt="" /> </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default ListVideoChannel
