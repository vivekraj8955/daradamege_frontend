import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb6Y0g1xtsZ-H70NjUI_61TbE1VxrkFvA",
  authDomain: "fir-2d3b9.firebaseapp.com",
  projectId: "fir-2d3b9",
  storageBucket: "fir-2d3b9.appspot.com",
  messagingSenderId: "1059063710011",
  appId: "1:1059063710011:web:0b672234c5517c0708371e",
  measurementId: "G-KG32MF4SH8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
