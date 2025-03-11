// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFyINjSWpmliPzNCRlZoJ8NlcSXQZlAy4",
  authDomain: "hubnex-skillup.firebaseapp.com",
  projectId: "hubnex-skillup",
  storageBucket: "hubnex-skillup.firebasestorage.app",
  messagingSenderId: "625097277823",
  appId: "1:625097277823:web:f899cc3e096a803e2fda4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
