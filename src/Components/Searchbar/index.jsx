import React from 'react'
import './Searchbar.css'
import { Link } from 'react-router-dom'

const Searchbar = () => {
  return (
    <>
          <div className='search-bar'>
            <input type="text" placeholder='Search' />
            <button ><Link to='/searchpage'><i className="fa-solid fa-magnifying-glass"></i></Link></button>
        </div>
    </>
  )
}

export default Searchbar
