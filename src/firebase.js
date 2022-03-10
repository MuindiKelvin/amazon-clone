import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaBvdc-0H0vL8VfbO529oMp-mYBDD9Icg",
  authDomain: "challenge-1dcd6.firebaseapp.com",
  databaseURL: "https://challenge-1dcd6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challenge-1dcd6",
  storageBucket: "challenge-1dcd6.appspot.com",
  messagingSenderId: "724237870853",
  appId: "1:724237870853:web:56861a519d1e93e90bf96c",
  measurementId: "G-TEM9LGPJC4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  