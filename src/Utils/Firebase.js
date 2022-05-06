import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZzqkjK_zqBv5sOnTDzq2gj5OHJF6sIp0",
  authDomain: "veersa-af2d2.firebaseapp.com",
  projectId: "veersa-af2d2",
  storageBucket: "veersa-af2d2.appspot.com",
  messagingSenderId: "654239989619",
  appId: "1:654239989619:web:d5455e4a088441bc254f06",
  measurementId: "G-SPT3BHVGXF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
