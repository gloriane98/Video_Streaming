import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../../CardElements.css'
import { useContext } from "react";
import { UserContext } from "../../ContextAccount";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const SubcribeVideo = () => {
    const [subcribe, setSubcribe] = useState([])
    const [loading,setLoading]=useState(true)
    let token = window.localStorage.getItem('token')
    console.log(token);

    const fetchVideoSubcribe = ()=>{
    fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+token)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setSubcribe(data)
        setLoading(false)
    })
    }
  
    useEffect(()=>{
    fetchVideoSubcribe();
    },[token])


return <>
        <Navbar/>
        <Sidebar/>
        
    <div className="videocontainer">
  {
    !loading ?
    subcribe.items?.map((video)=>{
      const videoItem=video.snippet.resourceId.channelId;
      return(
        
     <Link key={video.id} className="cards" to={`/listvideochannel/${videoItem}`} >
            <img src={video.snippet.thumbnails.medium.url} alt="youtube chaine" />
                <div className="items">
                  <div className="texte">
                    <p >{video.snippet.title}</p>
                    <p >{video.snippet.publishedAt}</p>
                    <p>{video.contentDetails.totalItemCount}</p>
                  </div>
                </div>
          </Link>
          )
          
        }):<Loader/>} 
    </div>  
        </>;
};

export default SubcribeVideo;
