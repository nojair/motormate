import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp as initializeFirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY",
  authDomain: "motormate-cd4a6.firebaseapp.com",
  projectId: "motormate-cd4a6",
  storageBucket: "motormate-cd4a6.appspot.com",
  messagingSenderId: "34392934813",
  appId: "1:34392934813:web:29660022bf0a9ffec14774"
};

// Initialize Firebase
initializeFirebaseApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
