import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD7n8E7b0wtFEwSBS8oa5wVwshLXkOyvNY",
  authDomain: "todoautos.firebaseapp.com",
  projectId: "todoautos",
  storageBucket: "todoautos.appspot.com",
  messagingSenderId: "627443339943",
  appId: "1:627443339943:web:113de9723a94056e54c182",
  measurementId: "G-TXE1ZH392N"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }