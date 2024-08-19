// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE2LhNQZdJWnUR4UfdbRNueTXGRcsWP0E",
  authDomain: "fir-init-c4b8e.firebaseapp.com",
  projectId: "fir-init-c4b8e",
  storageBucket: "fir-init-c4b8e.appspot.com",
  messagingSenderId: "121970262575",
  appId: "1:121970262575:web:283199d7573b6778cbbcda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;