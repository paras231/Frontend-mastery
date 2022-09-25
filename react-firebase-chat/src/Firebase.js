// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByn5lnw398YwoZlmyqU_KPFVfFT1ghmi8",
  authDomain: "chat-app-5af74.firebaseapp.com",
  projectId: "chat-app-5af74",
  storageBucket: "chat-app-5af74.appspot.com",
  messagingSenderId: "741423715845",
  appId: "1:741423715845:web:517bb1737e624bdad2ee6c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();