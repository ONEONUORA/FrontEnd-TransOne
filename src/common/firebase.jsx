



import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyANemfoogb85Mf8BX52Z_gRU0zl5Ohevvw",
  authDomain: "transone-b6bc0.firebaseapp.com",
  projectId: "transone-b6bc0",
  storageBucket: "transone-b6bc0.appspot.com",
  messagingSenderId: "369338263880",
  appId: "1:369338263880:web:dd0afc7852135565652b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

 export const authWithGoogle = async () =>{

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })
    return user;

}