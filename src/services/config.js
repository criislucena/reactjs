import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhause-react.firebaseapp.com",
  projectId: "coderhause-react",
  storageBucket: "coderhause-react.firebasestorage.app",
  messagingSenderId: "129738809871",
  appId: "1:129738809871:web:b9ed204111085b9e35b97a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)