import React from 'react'
import './Searchbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Searchbar = () => {
  const [inputSearch,setInputSearch]=useState("")
  return (
    <>
          <div className='search-bar'>
            <input type="search" placeholder='Search' />
            <Link to='/searchpage'><button type="button"><i className="fa-solid fa-magnifying-glass"></i></button></Link>
        </div>
    </>
  )
}

export default Searchbar
/* onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch}
 onClick={<SearchPage />} */
/* <div className="input-group d-flex justify-content-center ">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
        </div>
        <Link to={`/search/${inputSearch}`}>
          <button
            id="search-button"
            type="button"
            class="btn btn-primary"
            onClick={<SearchPage />}
          >
            <i className="fas fa-search header__searchbutton"></i>
          </button>
        </Link>
      </div> */