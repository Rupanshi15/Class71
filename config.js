import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA7YAgcyM8XY-yuSb8B-l1dibQHdZvltNc",
    authDomain: "project---71-7ed5c.firebaseapp.com",
    databaseURL: "https://project---71-7ed5c-default-rtdb.firebaseio.com",
    projectId: "project---71-7ed5c",
    storageBucket: "project---71-7ed5c.appspot.com",
    messagingSenderId: "727548476388",
    appId: "1:727548476388:web:d84c88609c84bc5164e5f1",
    measurementId: "G-Z1BFEXXZKM"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
