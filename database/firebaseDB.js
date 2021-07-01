import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAEL74YjAB4X-mCOoT-OjEJGqtghng20iM",
    authDomain: "codefiesta2021.firebaseapp.com",
    projectId: "codefiesta2021",
    storageBucket: "codefiesta2021.appspot.com",
    messagingSenderId: "146525665144",
    appId: "1:146525665144:web:ea16c8dd5c5f55dbec7a8d",
    measurementId: "G-N619F14GBD"
};

// if (!firebase.apps.length) {
//     firebase.firestore();
// } else {
//     firebase.app();
// };

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
export default firebase;
