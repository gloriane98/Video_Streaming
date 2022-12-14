import React from 'react'
import { useState, useEffect } from 'react'
import {Button,Stack,Paper,Avatar, Typography} from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {ThumbUp,ThumbDown} from '@mui/icons-material'
import moment from "moment"

export default function Comment() {
    const {videoId}=useParams()
    
    const [posts, setPosts] = useState([]);
    
  
    
    
    
    const getAllPosts = () => {
      axios.get("http://localhost:8000/api/posts")
        .then(resp => {
          setPosts(resp.data)
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err)
        })
    }
    
    useEffect(() => {
      getAllPosts();
    }, [])
// liked fonctionnality
const [likeCount, setLikeCount] = useState(0);
const [dislikeCount, setDislikeCount] = useState(0);
const [activeBtn, setActiveBtn] = useState("none");

const handleLikeClick = () => {
  if (activeBtn === "none") {
    setLikeCount(likeCount + 1);
    setActiveBtn("like");
    return;
  }

  if (activeBtn==='like'){
    setLikeCount(likeCount - 1);
    setActiveBtn("none");
    return;
  }

  if (activeBtn === "dislike") {
    setLikeCount(likeCount + 1);
    setDislikeCount(dislikeCount - 1);
    setActiveBtn("like");
  }
};

const handleDisLikeClick = () => {
  if (activeBtn === "none") {
    setDislikeCount(dislikeCount + 1);
    setActiveBtn("dislike");
    return;
  }
 
  if (activeBtn === 'dislike'){
    setDislikeCount(dislikeCount - 1);
    setActiveBtn("none");
    return;
  }

  if (activeBtn === "like") {
    setDislikeCount(dislikeCount + 1);
    setLikeCount(likeCount - 1);
    setActiveBtn("dislike");
  }
};
  return (
    <>
    <Stack direction="column">
        {
          posts && posts.map(videoComment => {
            if (videoComment.videoID === videoId) {
              return (

                <>
                  <Stack direction="column">

                    {videoComment.comments && videoComment.comments.map(val => {
                      return (
                        <Stack spacing={2}>
                          <Stack  direction='row' spacing={2} mt={2} >
                            <div className="img">  <Avatar /> </div>
                            <div className="userName">
                              <span>{val.userName}</span>
                              {" "}
                              {" "}
                              <span>
                               {moment(val.timestamp).fromNow()}
                              </span>
                            </div>
                          </Stack>
                           <Typography>{val.description}</Typography>
                          <Stack direction="row"  justifyContent="space-between">
                              <div className="like" onClick={handleLikeClick}><ThumbUp />{likeCount} </div>
                              <div className="dislike" onClick={handleDisLikeClick}><ThumbDown />{dislikeCount} </div>
                              <div className="response"> <Button className="btn btn-info text-white">Reply</Button></div>

                              <div className="subComment"></div>
                          </Stack>
                        </Stack>
                      )
                    })}
                  </Stack>

                </>
              )
            }
          })
        }

      </Stack>  
    </>
  )
}
