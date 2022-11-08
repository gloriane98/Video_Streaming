import React from 'react'
import '../../CardElements.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import PageError from '../PageError'
import moment from 'moment'

const ListVideoChannel = () => {
  
    const {channelId}=useParams()
    const [videoChannel,setVideoChannel]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&contentDetails&channelId=${channelId}&type=video&maxResults=21&key=${import.meta.env.VITE_APP_APIKEY}`)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setVideoChannel(data.items)
            setIsLoading(false)
            console.log(data.items);

        })
        .catch(()=> setIsError(true))
    },[])
    if(isError){
        return( <PageError/>)
    }
    
  return (
    <>
  
    <div>
      {isLoading ? (
        <div >
          <Loader/>
        </div>
      ) : null}
      <div  className="videocontainer">
        {videoChannel.map((video,index) => {
            const videoId=video.id.videoId;
            const videoItem=video.snippet.channelId;

          return (
            <Link key={index} className="cards" to={`/videoview/${videoId}`}>
                <img src={video.snippet.thumbnails.medium.url}  alt="" />
                  <div className="items">
                      <div className="texte">
                          <h3 >{video.snippet.title}</h3>
                          <Link to={`/listvideochannel/${videoItem}`} >
                               <p > {video.snippet.channelTitle} </p>
                            </Link>
                          <p>{moment.utc((moment.duration(`${video.snippet.publishTime}`).asSeconds())*1000).format("mm:ss")}</p>
                      </div>
                  </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default ListVideoChannel
