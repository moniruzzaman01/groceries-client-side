// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyC0Y7nVbnnhLz2MmTt2oWTnDeT8bKN8Es8",
//   authDomain: "groceries-59179.firebaseapp.com",
//   projectId: "groceries-59179",
//   storageBucket: "groceries-59179.appspot.com",
//   messagingSenderId: "558200529369",
//   appId: "1:558200529369:web:0adc996e11854671ff79c8",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
