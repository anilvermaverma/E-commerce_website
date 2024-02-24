// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTHLIpagOKVfaIZUGUWhfvaUTATwpiHA",
  authDomain: "mywebsite-802e2.firebaseapp.com",
  projectId: "mywebsite-802e2",
  storageBucket: "mywebsite-802e2.appspot.com",
  messagingSenderId: "831136170374",
  appId: "1:831136170374:web:4b7aa12e09a3f4ff586c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB , auth}