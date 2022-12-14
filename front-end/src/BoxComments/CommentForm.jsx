import React, { useState } from 'react'
import {TextField,Button,Stack,Paper,Avatar, Typography} from '@mui/material'
import Comment from './Comment';
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function CommentForm() {
  const {videoId}=useParams()
  const [description, setDescription] = useState('');
  const [commentIsAdd, setCommentIsAdd] = useState(null);
  const isTextareaDisabled = description.length === 0;

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
     
 
  const addComment = (e) => {
    setCommentIsAdd(1)
    e.preventDefault()
    axios.post('http://localhost:8000/api/posts', { videoID: videoId })
      .then(resp => {
  
        const commentID = resp.data
        axios.patch('http://localhost:8000/api/posts/comment-post/' + `${resp.data}`, {
          userName:localStorage.getItem('name'),
          description: description,
          commentID:commentID, 
        })
          .then(resp => {
            setDescription("")
            console.log(resp)
          })
          .catch(err => {
            console.log(err)
            setCommentIsAdd(false)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
   
  return (
    <>
     <form>
      <Stack direction="column">
              <Paper elevation={1} sx={{width:600}}>
                <TextField
                    multiline
                    fullWidth
                    maxRows={4}
                    label="Add Comment"
                    variant="standard"
                    sx={{width:"600px"}} value={description}
                  onChange={onChangeDescription}></TextField>
              </Paper>

                  <Paper elevation={1} sx={{width:600}}>
                    <Button onClick={addComment} disabled={isTextareaDisabled}>Send</Button>
                  </Paper>
        </Stack>
          </form>
       <Comment/>
    </>
  )
}
