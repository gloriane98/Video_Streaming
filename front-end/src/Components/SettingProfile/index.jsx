import {
  Stack,
  Button,
  IconButton,
  Grid,
  Avatar,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import axios from "axios";
import authAxios from "../../utils/client";

export default function SettingProfile() {
 const [user,setUser]=useState({
      userName: " ",
      picture: " ",
      facebook: " ",
      instagram: " ",
      twitter: " ",
 })

  const userId = localStorage.getItem("userId");
 
  const [selectedImage, setSelectedImage] = useState(null)
  const [picture, setPicture] = useState(null)
 
  const ref = useRef()
  const handleClick = (e) => {
     ref.current.click()
  }
  useEffect(() => {
    if (selectedImage) {
      setPicture(URL.createObjectURL(selectedImage))
    }
 }, [selectedImage])


  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      userId:userId,
      userName: user.userName,
      picture: user.picture,
      facebook: user.facebook,
      instagram: user.instagram,
    };

    authAxios().then(async (axios) => {
      const res = await axios.put(`/user/update/${userId}`, userdata);
      console.log(res)
      
    });
  };
  const handleChange = (event) => {
    setUser(event.target.value)
    
  }
  // console.log({setUser});
  // console.log({setSelectedImage})
  const styles = {
    positionForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };


  return (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "column", md: "row", lg: "row" }}
        spacing={2}
        pt={15}
        pl={{ xs: "90px", sm: "30%", lg: "0%", md: "0%" }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          sx={{ width: "60vw" }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#007464",
              fontWeight: "600",
            }}
          >
            Profile User
          </Typography>
         
            <div className="image" htmlFor="selected-image">
               {picture && selectedImage ? (
                  <Avatar
                     sx={{ width: 200, height: 200 }} 
                     src={picture}
                     alt={selectedImage.name}
                     className="profile"
                  />
               ) : (
                  <Avatar
                     sx={{ width: 200, height: 200 }} 
                     src={user.picture}
                     alt="profile-picture"
                  />
               )}
            </div>
          <Grid pt={2}>
            <form action="" onSubmit={submitUser}>
                <div onClick={handleClick}>
                  <input
                    ref={ref}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    style={{ display: 'none' }}
                    id="selected-image"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="#007464"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
            </form>
          </Grid>
        </Grid>
        <Box flexDirection="column">
          <form method="post" style={styles.positionForm} onSubmit={submitUser}>
            <TextField
              id="name"
              name="name"
              placeholder="Name"
              onChange={(e)=> setUser(e.target.value)}
              sx={{
                backgroundColor: "#E4E4EC",
                mb: "20px",
                width: { sm: 300, md: 300, xs: 300, lg: 400 },
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            ></TextField>
            <TextField
              id="fb"
              type="Facebook"
              name="facebook"
              placeholder="Facebook"
              onChange={(e)=> setUser(e.target.value)}
              sx={{
                backgroundColor: "#E4E4EC",
                mb: "20px",
                width: { sm: 300, md: 300, xs: 300, lg: 400 },
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            ></TextField>
            <TextField
              id="ig"
              name="instagram"
              placeholder="Instagram"
              onChange={(e)=> setUser(e.target.value)}
              sx={{
                backgroundColor: "#E4E4EC",
                mb: "20px",
                width: { sm: 300, md: 300, xs: 300, lg: 400 },
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            ></TextField>
            <Button type="submit">Register</Button>
          </form>
        </Box>
      </Stack>
    </>
  );
}