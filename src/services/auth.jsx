import axios from "axios";
import { auth } from "../firebase";

// const verifyUser= (async ()=>{
//   const idToken= await auth.currentUser?.getIdToken()
//   axios.get(import.meta.env.VITE_APP_URL, {
//     Authorization: `Bearer ${idToken}`,
//   })
  
//   console.log(idToken);
// })
const idToken=  auth.currentUser?.getIdToken()
console.log(idToken)
axios.get(import.meta.env.VITE_APP_URL, {
  Authorization: `Bearer ${idToken}`,
})