import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUuU20UAb-77SJt1KGBLgmNsh_sgFAh4I",
  authDomain: "chatapp-dc9c8.firebaseapp.com",
  projectId: "chatapp-dc9c8",
  storageBucket: "chatapp-dc9c8.appspot.com",
  messagingSenderId: "899068184851",
  appId: "1:899068184851:web:747114e46b67b13668f2e6",
  measurementId: "G-VR5V8J3SKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
