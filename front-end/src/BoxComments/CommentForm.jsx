import React, {  useState,useEffect } from "react";
import {
  TextField,
  Button,
  Stack,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentForm({socket}) {
  
  const [description, setDescription] = useState("");
  const [commentaire,setCommentaire]=useState([]);
  
  const isTextareaDisabled = description.length === 0;
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  
  useEffect(() => {
    socket.on("sendComment", (data) => {
      console.log("sendComment", data);
      if (data) {
        const newCommentaire = [...commentaire, data];
        setCommentaire(newCommentaire);
      }
    })},[socket,commentaire]) ;

    const { videoId } = useParams();
    // console.log(videoId)
    const onSubmit = (e) => {
      e.preventDefault();
      const timestamps= new Date().getTime();
      if (description.trim()) {
        socket.emit("sendComment", {
          videoID: videoId,
          userName:localStorage.getItem("name"),
          description:description,
          socket: socket.id,
          userID: localStorage.getItem("id"),
          timestamps:timestamps
        });
        setDescription("");
      }
    };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Stack direction="column">
          <Paper elevation={1} sx={{ width: 600 }}>
            <TextField
              multiline
              fullWidth
              maxRows={4}
              label="Add Comment"
              variant="standard"
              sx={{ width: "600px" }}
              value={description}
              onChange={onChangeDescription}
            ></TextField>
          </Paper>

          <Paper elevation={1} sx={{ width: 600 }}>
            <Button type="submit"  disabled={isTextareaDisabled}>
              Send
            </Button>
          </Paper>
        </Stack>
      </form>
      <Comment />
    </>
  );
}

/*   const commentID = resp.data;
        axios
          .patch(
            `${import.meta.env.VITE_APP_URL}/api/comments/replies/` +
              `${resp.data}`,
            {
              userName: localStorage.getItem("name"),
              description: description,
              commentID: commentID,
            }
          )
          .then((resp) => {
            setDescription("");
            // console.log(resp)
          })
          .catch((err) => {
            console.log(err);
            setCommentIsAdd(false);
          }); */