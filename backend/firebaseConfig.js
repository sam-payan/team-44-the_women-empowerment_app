// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDQSBSO6M5npYPD-Y8pI3uy_tGCIYSVwM",
  authDomain: "women-empowering-b45b5.firebaseapp.com",
  databaseURL: "https://women-empowering-b45b5-default-rtdb.firebaseio.com",
  projectId: "women-empowering-b45b5",
  storageBucket: "women-empowering-b45b5.firebasestorage.app",
  messagingSenderId: "341168482980",
  appId: "1:341168482980:web:7a23744064b9d12bc01431",
  measurementId: "G-VVC4CEGXBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };