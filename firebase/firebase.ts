import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgcLXuaqE8f0sZcyDRdnDKOXLk4HksCTM",
  authDomain: "fir-test-36d62.firebaseapp.com",
  projectId: "fir-test-36d62",
  storageBucket: "fir-test-36d62.appspot.com",
  messagingSenderId: "377682272547",
  appId: "1:377682272547:web:862a3e1cc34e4cf002ac96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
