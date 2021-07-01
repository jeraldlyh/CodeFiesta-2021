import firebase from "../firebaseDB";

export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        if (!email) {
            reject("Error: Email is not specified.");
        } else if (!password) {
            reject("Error: Password is not specified.");
        }
        firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
            .then(userCredential => {
                resolve(userCredential.user.displayName);
            })
            .catch(error => {
                console.log("Error in loginUser");
                reject(error);
            })
    })
}