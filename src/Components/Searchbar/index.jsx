import React from 'react'
import './Searchbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Searchbar = () => {
  const [inputSearch,setInputSearch]=useState("")
  return (
    <>
          <form className='search-bar'>
            <input type="search" placeholder='Search...' onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch}/>
            <Link to={`/searchpage/${inputSearch}`}><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></Link>
        </form>
    </>
  )
}

export default Searchbar
