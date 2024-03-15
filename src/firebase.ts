import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY",
  authDomain: "motormate-cd4a6.firebaseapp.com",
  projectId: "motormate-cd4a6",
  storageBucket: "motormate-cd4a6.appspot.com",
  messagingSenderId: "34392934813",
  appId: "1:34392934813:web:29660022bf0a9ffec14774"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }