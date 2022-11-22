import React from 'react'
import { Avatar, Box, Grid, Paper, Stack, TextField, Typography,Button, ListItemIcon } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


export default function Comment() {
  return (
   <>
    <Box>
        <Stack direction="row">
            <Avatar>

            </Avatar>
            <Typography>
                Gloriane Kingolo
            </Typography>
        </Stack>
        <Grid container direction="column">
            <Paper elevation={1} >
                <TextField label='Add comment' variant='standard' sx={{width:"500px"}}></TextField>
            </Paper>
            <Stack mt={2} >
                <Paper elevation={2} sx={{width:500}}>
                    <Typography>L'authentification était l'un des principaux défis auxquels j'ai été confronté. Cela m'a amené à passer quelques jours sur un pic de recherche sur OAuth, Auth0 et l'authentification à deux facteurs à l'aide de Firebase ou d'autres tiers. En raison des contraintes de temps du projet, j'ai dû tabler l'authentification et me concentrer davantage sur la visualisation des données à partir de parties de l'API qui n'étaient pas réservées aux utilisateurs authentifiés.</Typography>
                    <ListItemIcon><ThumbUpIcon/></ListItemIcon>
                    <ListItemIcon><ThumbDownIcon/></ListItemIcon>
                    <Button>Repondre</Button>
                </Paper>
            </Stack>
        </Grid>
    </Box>
   </>
  )
}
