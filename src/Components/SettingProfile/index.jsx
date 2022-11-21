import { Stack,Button, IconButton,Grid, Avatar, Box,TextField, Typography} from '@mui/material'
import React from 'react'
import {PhotoCamera} from '@mui/icons-material';
import {useSnackbar } from 'notistack';


export default function SettingProfile() {
    const styles={
        positionForm:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
    
        }
    }
    
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <>
    
      <Stack 
      direction={{xs:"column-reverse", sm:"column", md:"row", lg:"row"}}
      spacing={2}
      pt={15}
      pl={{xs:"90px", sm:"30%",lg:"0%",md:"0%"}}
      >
          <Grid 
          container 
          spacing={2}
          
          direction="column"
          alignItems="center"
          sx={{width:"60vw"}}

         >
        <Typography 
        variant='h5'
        sx={{
            color:"#007464",
            fontWeight:"600",
        }}
           >Profile User</Typography>
            <Grid
            pt={2}>
                <Avatar sx={{ width: 200, height: 200 }}>

                </Avatar>
            </Grid>
            <Grid pt={2}>
               <form method='post'>
                    <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="#007464" aria-label="upload picture"
                            component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
               </form>
            </Grid>
          </Grid>
        <Box 
        flexDirection="column">
            <form 
            method='post'
            style={styles.positionForm}>
                <TextField
                            required
                            id="name"
                            placeholder='Name'
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width:{ sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            } }}
                            >
                        </TextField>
                        <TextField
                            required
                            id="prenom"
                            placeholder="First name"
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width: { sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                        <TextField
                         
                            id="fb"
                            type="Facebook"
                            placeholder='Mot de passe'
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width:{ sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                        <TextField
                            required
                            id="ig"
                            placeholder="Instagram"
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width: { sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                        <TextField
                            required
                            id="tw"
                            placeholder="Twitter"
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width: { sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                         <Button type="submit">Register</Button>
                </form>
        </Box>
      </Stack>
    </>
  )
}

/*
                <form style={styles.positionForm} >
                    <TextField
                        required
                        id="name"
                        placeholder='Maria Lozo'
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        } }}
                        >
                    </TextField>
                    <TextField
                        required
                        id="boutique"
                        placeholder="Maria couture"
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width: { sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }}}
                        >
                    </TextField>
                    <TextField
                        required
                        id="password"
                        type="password"
                        placeholder='Mot de passe'
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }}}
                        >
                    </TextField>
                    <Button 
                    alignItems="center"
                    variant="contained" 
                    type="submit"
                    sx={{
                    backgroundColor: "#D2282D",
                    color : "#fff",
                    borderRadius:"10px",
                    '&:hover':{
                    backgroundColor:"#fff",
                    color:"#D2282D"
                    }}}
                    >
                        Envoyer
                    </Button>
                </form>

} */