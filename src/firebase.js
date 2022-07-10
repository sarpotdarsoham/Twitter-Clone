import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrbC2NduB_A9ltwZmP71OSkLlWk9VjoMM",
  authDomain: "twitter-clone-b344d.firebaseapp.com",
  projectId: "twitter-clone-b344d",
  storageBucket: "twitter-clone-b344d.appspot.com",
  messagingSenderId: "1018324708777",
  appId: "1:1018324708777:web:da50d3589b263c55bca8b8"
};
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
