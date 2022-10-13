import React from 'react'
import './Searchbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SearchPage from '../SearchPage'

const Searchbar = () => {
  const [inputSearch,setInputSearch]=useState("")
  return (
    <>
          <div className='search-bar'>
            <input type="search" placeholder='Search' onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch}/>
            <Link to={`/searchpage/${inputSearch}`}><button type="button"><i className="fa-solid fa-magnifying-glass"></i></button></Link>
        </div>
    </>
  )
}

export default Searchbar
