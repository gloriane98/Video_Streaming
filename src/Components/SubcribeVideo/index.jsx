import React,{useState,useEffect} from "react";
import "./SubcribeVideo.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../ContextAccount";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const SubcribeVideo = () => {
    const [subcribe, setSubcribe] = useState([])
    const {userToken, setUserToken} = useContext(UserContext)
    const [loading,setLoading]=useState(true)
   
  
    const fetchVideoSubcribe = ()=>{
    fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
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
    },[userToken])

    console.log(userToken);
return <>
        <Navbar/>
        <Sidebar/>
        
    <div className="subcribecontainer">
  {
    !loading ?
    subcribe.items?.map((video)=>{
      const videoItem=video.snippet.resourceId.channelId;
      return(
        
     <Link key={video.id} className="cards" to={`/listvideochannel/${videoItem}`} >
            <img src={video.snippet.thumbnails.medium.url} alt="youtube chaine" />
              <div className="bloc-text">
               <div className="">
               <p className="">{video.snippet.title}</p>
               {/* <p className="title-video"> </p> */}
               </div>
              </div>
          </Link>
          )
          
        }):<Loader/>} 
    </div>  
        </>;
};

export default SubcribeVideo;
