
import { initializeApp,getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKm6zVtnw2t4VRs4HDJlEIZwbsbe5JFGk",
    authDomain: "prepwise07.firebaseapp.com",
    projectId: "prepwise07",
    storageBucket: "prepwise07.firebasestorage.app",
    messagingSenderId: "281531277837",
    appId: "1:281531277837:web:f785121d81b3f205362b44",
    measurementId: "G-PNT8G5EFK9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);