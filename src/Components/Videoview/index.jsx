import React,{ useState,useEffect } from 'react'
import './Videoview.css'
import { useParams } from 'react-router-dom'
import IframeVideo from '../IframeVideo'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
// import {Link} from 'react-router-dom'
// import VideoPop from '../VideoPop'
// import VideoLikes from '../VideoLikes'
// import Loader from '../Loader'



const Videoview = () => {
  // let {searchQuery}=useParams()
  let {videoId}= useParams();
  const [view , setView]= useState(true);
  const [video, setVideo] = useState([])
const [loading,setLoading]=useState(true)
let token = window.localStorage.getItem('token')
const [isError,setIsError]=useState(false)


const fetchPlaylist = ()=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=${videoId}&safeSearch=none&type=video&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI&access_token=`+token) 
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
          // !loading ?
          video.items?.map((video)=>{
            return(

          <Link key={video.id.videoId} className="videoCard" to={`/videoview/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
                      <div className="">
                        <div className="">
                          <p > {video.snippet.channelTitle} </p>
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