// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd-tMtD_Yz2xnpMvaMKiHqcVxYiGkh5vg",
    authDomain: "shoppify-963a9.firebaseapp.com",
    projectId: "shoppify-963a9",
    storageBucket: "shoppify-963a9.appspot.com",
    messagingSenderId: "468537727348",
    appId: "1:468537727348:web:d7683b0dbdf6df43597421"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }