import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLjWJWsOy-SbfmAHHw0uIl92h1qbmFge0",
  authDomain: "rivalcms-64d64.firebaseapp.com",
  projectId: "rivalcms-64d64",
  storageBucket: "rivalcms-64d64.appspot.com",
  messagingSenderId: "957915186508",
  appId: "1:957915186508:web:e99fb7cf2ddf0cf5e7bbe9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

