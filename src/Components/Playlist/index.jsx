import React,{useState,useEffect} from 'react'
import Loader from '../Loader'
import PageError from '../PageError'
import { Link } from 'react-router-dom'


const Playlist = () => {
    
const [video, setVideo] = useState([])
const [loading,setLoading]=useState(true)
let token = window.localStorage.getItem('token')
const [isError,setIsError]=useState(false)


const fetchPlaylist = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=FR&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI&access_token='+token)
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
    <div className='main'>
      <h1 className="Titre">Home</h1>
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

export default Playlist


/* GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */
















/* GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */