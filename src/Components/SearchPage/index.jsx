import React,{ useState, useEffect }  from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const SearchPage = (props) => {
  let { searchQuery } = useParams();

  const [channelRow, setChannelRow] = useState("");
  const [videoRows, setVideoRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setChannelRow("");
    setVideoRows([]);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=channel&q=${searchQuery}&safeSearch=none&key=AIzaSyAxYTdTGDlgbCAqKpQhTrVlpCN4l3Eyl0I`
      )
      .then((response) => {
        console.log(response.data.items);

      });

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchQuery}&safeSearch=none&key=AIzaSyAxYTdTGDlgbCAqKpQhTrVlpCN4l3Eyl0I`
      )
      .then((response) => {
        console.log(response.data.items);
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchQuery]);


  return (
    <>
      <Navbar/>

    </>
  )
}

export default SearchPage
