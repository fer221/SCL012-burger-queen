import firebase from 'firebase/app'
import 'firebase/firestore'

const fireConfig = {
    apiKey: "AIzaSyA9cu68QzFHd7uQYm4JvgBPVGkS_6C5CKY",
    authDomain: "burger-queen-e7d50.firebaseapp.com",
    databaseURL: "https://burger-queen-e7d50.firebaseio.com",
    projectId: "burger-queen-e7d50",
    storageBucket: "burger-queen-e7d50.appspot.com",
    messagingSenderId: "873468050432",
    appId: "1:873468050432:web:1ed9ec1bdda5ccd31b2ce5",
    measurementId: "G-3PCVD9CP89"
  };
  firebase.initializeApp(fireConfig);
  let db= firebase.firestore();
  export default db
