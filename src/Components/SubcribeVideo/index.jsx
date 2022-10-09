import React,{useState,useEffect} from "react";
import "./SubcribeVideo.css";
import { Link } from "react-router-dom";
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
    fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCCab9t43yIzIgdAM9FWpdRw&key=AIzaSyBD5CK_R6LCQmiLLxTu9oxCjs96rKTBxfk&access_token='+userToken)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setSubcribe(data)
        setLoading(false)
    })
    }
    console.log(userToken);
    console.log(userToken);
    useEffect(()=>{
    fetchVideoSubcribe();
    },[])
    console.log(subcribe.items);
  return <>
        <Navbar/>
        <Sidebar/>
        
    <div className="subcribecontainer">
  {
    !loading ?
    subcribe.items.map((video)=>{
      return(

     <div className="cards" >
            <img src={video.snippet.thumbnails.default.url} alt="" />
              <div className="bloc-text">
               <div className="text">
               <p className="title-video"> </p>
               <p className="title-video"> </p>
               </div>
              </div>
          </div>
          )
          
        }):<Loader/>} 
    </div>  
        </>;
};

export default SubcribeVideo;
