// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import { getauth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDBc-Lh_-_YYIDbNIjcuh8326aeIuUVqc",
  authDomain: "smit-project-9f246.firebaseapp.com",
  projectId: "smit-project-9f246",
  storageBucket: "smit-project-9f246.appspot.com",
  messagingSenderId: "459683189153",
  appId: "1:459683189153:web:c6c84a6f794c53e3157be0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getauth(app);

export let checking = "saleem";
