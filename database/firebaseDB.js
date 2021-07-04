import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX",
    measurementId: "XXX"
};

// if (!firebase.apps.length) {
//     firebase.firestore();
// } else {
//     firebase.app();
// };

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
export default firebase;
