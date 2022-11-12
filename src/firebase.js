import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "supa-admin.firebaseapp.com",
  projectId: "supa-admin",
  storageBucket: "supa-admin.appspot.com",
  messagingSenderId: "619841833557",
  appId: "1:619841833557:web:e314b44ce2f2a0d46322dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
