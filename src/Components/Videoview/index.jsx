import React from 'react'
import Navbar from '../Navbar'
import './Videoview.css'
import {Link} from 'react-router-dom'
import image from '../../images/images.png'

const Videoview = () => {
  return (
    <>
     <Navbar/>
     <div className="vidvicontainer">
     <div className="vidvicontent">
     <div className="left"></div>
        <div className="right">
  
            <Link to='/all_video'>
                <span className='btn-all_video'>Tout </span>
            </Link>
            <Link to='/similar'>
                <span className='btn-similar'>Videos Similaires </span>
            </Link>

            <div className="video">
            <Link  >
                <img src={image} alt="video"  />
            <div >
             <div>
             <p>
                Amanda/Prise de parole en public
                </p>
                <p>1200 vues  <span >03:10</span> </p>
             </div>
            </div>
        </Link>
            </div>

        </div>
     </div>
     </div>
    </>
  )
}

export default Videoview
