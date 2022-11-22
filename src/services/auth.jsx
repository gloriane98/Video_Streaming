import axios from "axios";
import { auth } from "../firebase";

const verifyUser= (async ()=>{
  const idToken= await auth.currentUser?.getIdToken()
  axios.get(`${import.meta.env.VITE_APP_URL}/user`, {
    Authorization: `Bearer ${idToken}`,
  })
  
  console.log(idToken);
})
