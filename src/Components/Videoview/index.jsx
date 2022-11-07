import React,{ useState,useEffect } from 'react'
import './Videoview.css'
import { useParams } from 'react-router-dom'
import IframeVideo from '../IframeVideo'
import { Link } from 'react-router-dom'




const Videoview = () => {
  let {videoId}= useParams();
  const [video, setVideo] = useState([])
const [loading,setLoading]=useState(true)
let token = window.localStorage.getItem('token')
const [isError,setIsError]=useState(false)


const fetchPlaylist = ()=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=${videoId}&safeSearch=none&type=video&key=${import.meta.env.VITE_APP_APIKEY}&access_token=`+token) 
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
    fetchPlaylist();
},[token])
if(isError){
  return( <PageError/>)
}

  return (
    <>
  
     <div className="vidvicontainer">
        <div className="vidvicontent">
                <IframeVideo videoId={videoId} />
        </div>

        <div className='ListeVideo'>
        {
          video.items?.map((video)=>{
            return(

          <Link key={video.id.videoId} className="videoCard" to={`/videoview/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
                      <div className="">
                        <div className="texte">
                          <h3 > {video.snippet.channelTitle} </h3>
                          <p > {video.snippet.title} </p>
                        </div>
                      </div>
                </Link>
                )
                
              })}
        </div>
     </div>
    
    </>
  )
}

export default Videoview


/*   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compresse 
  
  curl \
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=Ks-_Mh1QhMc&safeSearch=none&type=video&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

  
  
  
  */