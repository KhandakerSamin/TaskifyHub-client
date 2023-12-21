import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtHaNsTkBm3cYH4e0ZOPwzuWpHQnJy93k",
  authDomain: "taskifyhub.firebaseapp.com",
  projectId: "taskifyhub",
  storageBucket: "taskifyhub.appspot.com",
  messagingSenderId: "534605904015",
  appId: "1:534605904015:web:c870979efee312b1ca18fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;