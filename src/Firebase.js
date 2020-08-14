import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSRK0lYY2LkcgnsoBZ2eBodNDWKJYKa48",
  authDomain: "messenger-clone-11bf8.firebaseapp.com",
  databaseURL: "https://messenger-clone-11bf8.firebaseio.com",
  projectId: "messenger-clone-11bf8",
  storageBucket: "messenger-clone-11bf8.appspot.com",
  messagingSenderId: "926442792026",
  appId: "1:926442792026:web:808ec3904fd6dec59ee463",
  measurementId: "G-NQ50FBDSRE",
});
const db = firebaseApp.firestore();

export default db;
