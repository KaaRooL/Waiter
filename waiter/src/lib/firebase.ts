// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGnTDR2_O3M4zLxGLD-dg4GoSKCs3_1oE",
  authDomain: "waiter-253ed.firebaseapp.com",
  projectId: "waiter-253ed",
  storageBucket: "waiter-253ed.appspot.com",
  messagingSenderId: "799495784420",
  appId: "1:799495784420:web:fae66a6eac667a779a69f1",
  measurementId: "G-6T028GWYHM"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged");
    console.log(user.email);
  } else {
    console.log("User NOT LOGGED");
    // const logoutUrl = new URL("/api/logout");
    // fetch("/api/logout",{
    //     method:"POST"
    // });
  }
});

onIdTokenChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in or token was refreshed.");
    console.log(user.email);
  } else {
    console.log("User is signed out or token expired.");
    // const logoutUrl = new URL("/api/logout");
    // fetch("/api/logout",{
    //     method:"POST"
    // });
  }
});

export { auth }


var b = new Promise((res,rej)=>{
  let a = 10;
  if(a === 3 ){
    res(15);
  }
  
  rej("wrong")
})
