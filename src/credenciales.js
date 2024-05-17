// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_wvC3xPvCoJlRc2pZLFxABf2cssHbjdI",
  authDomain: "ecosystemdb2.firebaseapp.com",
  projectId: "ecosystemdb2",
  storageBucket: "ecosystemdb2.appspot.com",
  messagingSenderId: "573806046242",
  appId: "1:573806046242:web:0e971d367890ec068bee7b",
  //measurementId: "G-VDM69HDTNE"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(appFirebase);
export default appFirebase;