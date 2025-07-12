
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// This was copied from your Firebase project settings.
const firebaseConfig = {
  apiKey: "AIzaSyBkiRyKanrHBNS12z19wRpwaTBuTcfOhVc",
  authDomain: "clase2pentateuco.firebaseapp.com",
  projectId: "clase2pentateuco",
  storageBucket: "clase2pentateuco.firebasestorage.app",
  messagingSenderId: "814515173360",
  appId: "1:814515173360:web:c891ec3c8b1a31a4d7cf35",
  measurementId: "G-55CSGS3HC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication instance to be used throughout the app
export const auth = getAuth(app);
