import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "bth-companion-app.firebaseapp.com",
  projectId: "bth-companion-app",
  storageBucket: "bth-companion-app.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

initFirebase();

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
