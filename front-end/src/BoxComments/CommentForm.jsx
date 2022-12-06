import React from 'react'
import { useState, useEffect } from 'react'
import {TextField,Button,Stack,Paper} from '@mui/material'
import authAxios from "../utils/client"
import { useParams } from 'react-router-dom';

export default function CommentForm({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
}) {
    const [message, setMessage]=useState("");
    const isTextareaDisabled = message.length === 0;
    const videoId=useParams()
    // console.log(videoId);

    const onSubmit = (event) => {
      event.preventDefault();
      setMessage("")
      handleSubmit(message);

      const commentData={
          // userId:id,
          videoId:videoId,
          description:message,
          // replies:[{
          //   description:message
          // }],
          // likeCount:[{
          //   count:count
          // }],
          // dislikeCount:[{
          //   count:count
          // }]

      }
      authAxios().then(async(axios)=>{
        const response=await axios.post(`/comments`, commentData)
        console.log(response);
      })
    };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <Stack direction="column">
            <Paper elevation={2} sx={{width:600}}>
                <TextField
                    multiline
                    maxRows={4}
                    label="Add Comment"
                    variant="standard"
                    sx={{width:"600px"}}
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    >
                </TextField>
                <Button 
                    disabled={isTextareaDisabled}
                    type="submit"
                    >
                    {submitLabel}
                </Button>
                {hasCancelButton && (
                    <Button
                    type="button"
                    onClick={handleCancel}
                    >
                    Cancel
                    </Button>
                )}
            </Paper>
        </Stack>
      </form>
    </>
  )
}
