
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI",
  authDomain: "my-stream-364706.firebaseapp.com",
  projectId: "my-stream-364706",
  storageBucket: "my-stream-364706.appspot.com",
  messagingSenderId: "661962276208",
  appId: "1:661962276208:web:36718484f9ca40892d63b5"
};

 
export const app = initializeApp(firebaseConfig);

export const auth= getAuth(app) 
export const provider = new GoogleAuthProvider();

export const signInWithGoogle= ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
        console.log(result.user.photoURL)
        localStorage.setItem('image',result.user.photoURL)
        localStorage.setItem('token', result.user.accessToken)
        console.log(result.user.accessToken);
    }).catch(error => console.log(error))
}

