import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOAnhkSucS2eu_MA7QEdusWinkaJ86gc0",
  authDomain: "khalid-3181a.firebaseapp.com",
  projectId: "khalid-3181a",
  storageBucket: "khalid-3181a.firebasestorage.app",
  messagingSenderId: "6184382300",
  appId: "1:6184382300:web:80c6a3f378b710efc75b99",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);