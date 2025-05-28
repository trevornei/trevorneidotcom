import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU5Ok-ETtfBeFGTiu3eF5suusxE6jd3U8",
  authDomain: "trevorneidotcom-blog.firebaseapp.com",
  projectId: "trevorneidotcom-blog",
  storageBucket: "trevorneidotcom-blog.firebasestorage.app",
  messagingSenderId: "408115552314",
  appId: "1:408115552314:web:926e8db0055b54d2bb9503",
  measurementId: "G-7MCGW5YJ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default firebase;
