// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCZ_h7A123TvccLtZWOuWEqBZHUiwf0Js",
    authDomain: "piccollage-d178d.firebaseapp.com",
    projectId: "piccollage-d178d",
    storageBucket: "piccollage-d178d.appspot.com",
    messagingSenderId: "660323394632",
    appId: "1:660323394632:web:e0091ca86ba51d3025e47d",
    measurementId: "G-DBJ7GB21RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);