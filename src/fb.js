import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDw_osTDW2Hi-DEQyUY2sXHqcDWTr4krJs",
    authDomain: "marsteo-v1.firebaseapp.com",
    databaseURL: "https://marsteo-v1.firebaseio.com",
    projectId: "marsteo-v1",
    storageBucket: "marsteo-v1.appspot.com",
    messagingSenderId: "518152207756",
    appId: "1:518152207756:web:ad94b53c077569989d2aa9",
    measurementId: "G-425RRZLBJY"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });
export default db;

// firebase.analytics();