import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAI9VMMzuKSGt7lh82-RCBb0xFy6i2JBe0",
  authDomain: "crwn-clothing-7a9d6.firebaseapp.com",
  databaseURL: "https://crwn-clothing-7a9d6.firebaseio.com",
  projectId: "crwn-clothing-7a9d6",
  storageBucket: "crwn-clothing-7a9d6.appspot.com",
  messagingSenderId: "751450252386",
  appId: "1:751450252386:web:9cf259a26a5114d1535d3b",
  measurementId: "G-KRBDWDLSFE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
