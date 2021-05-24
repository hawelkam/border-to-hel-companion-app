import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLSFGbg35lhr86FG5xbuwcfdG8IyRUqwc",
  authDomain: "bth-companion-app.firebaseapp.com",
  projectId: "bth-companion-app",
  storageBucket: "bth-companion-app.appspot.com",
  messagingSenderId: "309125109870",
  appId: "1:309125109870:web:165b2cf49a45e67a3fee7f",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
