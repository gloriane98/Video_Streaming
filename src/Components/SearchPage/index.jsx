import React,{ useState, useEffect }  from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loader from '../Loader'
import './SearchPage.css'

const SearchPage = () => {
  let { searchQuery } = useParams();

  const [videoRows, setVideoRows] = useState([]);
  const [loader,setLoader]=useState(true)
  const fectData= ()=>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&type=video&q=${searchQuery}&safeSearch=none&key=${import.meta.env.VITE_APP_APIKEY}`
    )
    .then((response) => {
     setVideoRows(response.data.items)
      setLoader(false)
    })
    .catch((error)=>(console.log(error)))

  }
 
  useEffect(() => {
   fectData();
  
  }, [searchQuery]);


  return (
    <>
      <Navbar/>
     <div className="videoSearch">
     {
       !loader ?
       videoRows?.map((item)=>{
      const videoId=item.id.videoId;
        return (
         <div className="videoRow">
           <Link key={item.id} to={`/videoview/${videoId}`}  >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className='text'>
            <p>{item.snippet.channelTitle}</p>
                   <p>{item.snippet.title}</p>
        </div>
            
            </Link>
         </div>
        )
      }):<Loader/>}
     </div>

    </>
  )
}

export default SearchPage
