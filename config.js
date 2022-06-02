import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCXvU_2OaW0ntiqqJXEwRJ2ZgdslukK0Iw",
  authDomain: "e-ride-ab392.firebaseapp.com",
  projectId: "e-ride-ab392",
  storageBucket: "e-ride-ab392.appspot.com",
  messagingSenderId: "347274610111",
  appId: "1:347274610111:web:d4c061a3236cbd64e18d0a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
