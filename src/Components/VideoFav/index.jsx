import React, { useState,useEffect } from 'react'
import './VideoFav.css'
import image from '../../images/images.png'
import {Link} from 'react-router-dom'



const VideoFav = () => {
const clef = "AIzaSyAZgkWdyx0qBoK4oJ9F2l-g124QSzhfP_s";
const clef2 = "AIzaSyDbl5zERK3vAoEsZuEmxp2m70NvxmBlSig"
const [users, setUsers] = useState({})
const fetchSubcription = ()=>{
  fetch(``)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    console.log(data)
  })
}

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
