// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUlwF8ppJudB6nqNVNymK8sjhst1wk_cE",
  authDomain: "travel-guide-agency.firebaseapp.com",
  projectId: "travel-guide-agency",
  storageBucket: "travel-guide-agency.appspot.com",
  messagingSenderId: "591643702265",
  appId: "1:591643702265:web:6cbeaea37660a1a7850328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;