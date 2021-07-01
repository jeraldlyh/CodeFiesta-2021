import firebase from "../firebaseDB";
import { v4 as uuidv4 } from "uuid";

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
    });
};

// Manual cloud function trigger
export const createUser = (username) => {
    firebase.firestore().collection("User")
        .doc(username)
        .set({
            _id: uuidv4(),
            registeredAt: new Date().getTime(),
            points: 0,
            enableNotification: false,
            questCompleted: 0,
            avatar: "https://placeimg.com/140/140/any",
        });
}

export const registerUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email.trim(), password.trim())
            .then(userCredential => {
                userCredential.user.updateProfile({
                    displayName: username
                }).then(() => {
                    createUser(username);
                    resolve(username);
                })
            })
            .catch(error => {
                console.log("Error in registerUser");
                reject(error);
            });
    });
};