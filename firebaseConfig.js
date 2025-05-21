// lib/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBmXmD1rMcBvSB8EVOKYMvJ-TOleUJsJTc",
    authDomain: "wecwater-1c9d3.firebaseapp.com",
    projectId: "wecwater-1c9d3",
    storageBucket: "wecwater-1c9d3.firebasestorage.app",
    messagingSenderId: "126478856646",
    appId: "1:126478856646:web:e6a105dbb044032366c2c7",
    measurementId: "G-7STCK7NB36"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
