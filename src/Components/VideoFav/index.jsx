import React from 'react'
import './VideoFav.css'
import image from '../../images/images.png'
import {Link} from 'react-router-dom'

const VideoFav = () => {
  return (
    <>
      <div className="videocontainer">
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        <Link className="card1" to='/videoview'>
                <img src={image} alt="video"  className='image'/>
            <div className="item1">
             <div className="text">
             <p className="title-video">
                Amanda/Prise de parole en public
                </p>
                <p className="number-vue">1200 vues  <span className="timer">03:10</span> </p>
             </div>
            </div>
        </Link>
        
        
      </div>
    </>
  )
}

export default VideoFav
