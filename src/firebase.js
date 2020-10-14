import firebase from '../node_modules/firebase/firebase';
import "firebase/auth";
import "firebase/firestore";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  var firebaseConfig = {
    apiKey: "AIzaSyDs_ZHLRp5XKDQtWE3V2OzSYgH6OKZ7heg",
    authDomain: "transport-ma-9ae4d.firebaseapp.com",
    databaseURL: "https://transport-ma-9ae4d.firebaseio.com",
    projectId: "transport-ma-9ae4d",
    storageBucket: "transport-ma-9ae4d.appspot.com",
    messagingSenderId: "1096006464302",
    appId: "1:1096006464302:web:a6d9a27cb835edc15b80bf",
    measurementId: "G-PHMMPDRPFJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();