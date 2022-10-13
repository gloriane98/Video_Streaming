import React,{ useState, useEffect }  from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const SearchPage = () => {
  let { searchQuery } = useParams();
  console.log(searchQuery)
  const [videoRows, setVideoRows] = useState([]);

  const fectData= ()=>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchQuery}&safeSearch=none&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI`
    )
    .then((response) => {
     console.log(response);
     setVideoRows(response)
    })
    .catch((error)=>(console.log(error)))

  }
 
  useEffect(() => {
   fectData();
  
  }, []);


  return (
    <>
      <Navbar/>
     <div className="videoSeacrh">
     {videoRows.map((items)=>{
      const videoId=items.id.videoId;
        return (
         <div className="videoRow">
           <Link to={`/videoview/${videoId}`}>
            <img src="" alt="" />
            <p></p>
            </Link>
         </div>
        )
      })}
     </div>

    </>
  )
}

export default SearchPage
