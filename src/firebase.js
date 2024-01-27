// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh6mJKmDyTqzPA6mch5kJyIGpQwZikjnM",
  authDomain: "fs-12-1st-project.firebaseapp.com",
  projectId: "fs-12-1st-project",
  storageBucket: "fs-12-1st-project.appspot.com",
  messagingSenderId: "335860184889",
  appId: "1:335860184889:web:a977fcd0596db03579dae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth code
export const auth =getAuth(app)
// export const auth=app.auth()
export default app;