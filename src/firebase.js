import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtzQuiO29mJXpyO4oKG8VN5HIVGgXlT_w",
  authDomain: "leave-application-andtracking.firebaseapp.com",
  projectId: "leave-application-andtracking",
  storageBucket: "leave-application-andtracking.firebasestorage.app",
  messagingSenderId: "1051181335297",
  appId: "1:1051181335297:web:0a3bdff03b6a167e8a1100",
  measurementId: "G-DB8RBRSZ4M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth }; 