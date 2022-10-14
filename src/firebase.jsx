import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
// import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCIg37omAzeHksxcWhojllg8zdxt4iTRwI",
  authDomain: "my-stream-364706.firebaseapp.com",
  projectId: "my-stream-364706",
  storageBucket: "my-stream-364706.appspot.com",
  messagingSenderId: "661962276208",
  appId: "1:661962276208:web:36718484f9ca40892d63b5"
};

firebase.initializeApp(firebaseConfig)
 
export const app = initializeApp(firebaseConfig);

// export const auth= getAuth(app) 
export const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

export const signInWithGoogle= ()=>{
    signInWithPopup(provider).then((result)=>{
       console.log(result)
        localStorage.setItem('image',result.user.photoURL)
        localStorage.setItem('token', result.user.accessToken)
       
    }).catch(error => console.log(error))
}

export default firebase.auth();