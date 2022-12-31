import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCioKmlDMXySDtp3NYs0WF7eXZ6VnsUl-k",
  authDomain: "excelirate.firebaseapp.com",
  projectId: "excelirate",
  storageBucket: "excelirate.appspot.com",
  messagingSenderId: "234426245744",
  appId: "1:234426245744:web:c0f858a113e210f5778ab5",
  measurementId: "G-1EWY5LFT7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
