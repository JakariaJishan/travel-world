import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcfPKQYXb12KqlYJH8HAAxChEk7_lZSGM",
  authDomain: "goto-travel.firebaseapp.com",
  projectId: "goto-travel",
  storageBucket: "goto-travel.appspot.com",
  messagingSenderId: "9796061902",
  appId: "1:9796061902:web:137a8e0b1f4cd4e944de9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);