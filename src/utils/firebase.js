// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDaVU2eixv3cd1EKs6fiFJpG843FhzQcAY",
//     authDomain: "netflix-gpt-bb40a.firebaseapp.com",
//     projectId: "netflix-gpt-bb40a",
//     storageBucket: "netflix-gpt-bb40a.appspot.com",
//     messagingSenderId: "830805561005",
//     appId: "1:830805561005:web:0da1072bbe1233c6a20024",
//     measurementId: "G-0J2JGXD6J7"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyDaVU2eixv3cd1EKs6fiFJpG843FhzQcAY",
    authDomain: "netflix-gpt-bb40a.firebaseapp.com",
    projectId: "netflix-gpt-bb40a",
    storageBucket: "netflix-gpt-bb40a.appspot.com",
    messagingSenderId: "830805561005",
    appId: "1:830805561005:web:0da1072bbe1233c6a20024",
    measurementId: "G-0J2JGXD6J7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();