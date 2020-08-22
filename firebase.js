import * as firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/analytics"; 



var firebaseConfig = {
  apiKey: "AIzaSyCIoSTqAkcX04YKVDf3Uz7VXNCspHwY-2g",
  authDomain: "dhikr-d7cd4.firebaseapp.com",
  databaseURL: "https://dhikr-d7cd4.firebaseio.com",
  projectId: "dhikr-d7cd4",
  storageBucket: "dhikr-d7cd4.appspot.com",
  messagingSenderId: "737418985546",
  appId: "1:737418985546:web:d8d8d061264997eb47e6b3",
  measurementId: "G-DF70Q3P779"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig).firestore();
}



// firebase.analytics();

export default firebase;