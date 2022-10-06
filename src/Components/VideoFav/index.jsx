import React, { useState,useEffect } from 'react'
import './VideoFav.css'
import image from '../../images/images.png'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from "../../ContextAccount"


const VideoFav = () => {
const {userToken, setUserToken} = useContext(UserContext)
const fetchSubcription = ()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI', { method : 'GET',headers:new Headers({'Authorization': `Bearer ${userToken}`})})
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    console.log(data)
  })
}
console.log(userToken);
useEffect(()=>{
  fetchSubcription();
},[])
  return (
    <>
      <div className="videocontainer">
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                
                </p>
                <p className="number-vue">  <span className="timer"></span> </p>
             </div>
            </div>
        </Link>
      
        
        
        
       
        
        
      </div>
    </>
  )
}

export default VideoFav
