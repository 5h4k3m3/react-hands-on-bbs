// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config/firebaseConfig";

// Your web app's firebaseConfig like this,
// export const firebaseConfig = {
//   apiKey: "xxxxx",
//   authDomain: "xxxxx",
//   projectId: "xxxxx",
//   storageBucket: "xxxxx",
//   messagingSenderId: "xxxxx",
//   appId: "xxxxx",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
