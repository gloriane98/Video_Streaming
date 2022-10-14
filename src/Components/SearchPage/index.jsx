import React,{ useState, useEffect }  from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loader from '../Loader'


const SearchPage = () => {
  let { searchQuery } = useParams();
  console.log(searchQuery)
  const [videoRows, setVideoRows] = useState([]);
  const [loader,setLoader]=useState(true)
  const fectData= ()=>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchQuery}&safeSearch=none&key=AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI`
    )
    .then((response) => {
    console.log(response.data.items)
     setVideoRows(response.data.items)
      setLoader(false)
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
     {
       !loader ?
       videoRows?.map((item)=>{
      const videoId=item.id.videoId;
        return (
         <div className="videoRow">
           <Link to={`/videoview/${videoId}`}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <p>{item.snippet.channelTitle}</p>
             <p>{item.snippet.title}</p>
            </Link>
         </div>
        )
      }):<Loader/>}
     </div>

    </>
  )
}

export default SearchPage
