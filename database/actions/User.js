import firebase from "../firebaseDB";
import _ from "lodash";

export const addPointsToUser = (newPoints, user) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(user)
            .update({
                points: firebase.firestore.FieldValue.increment(newPoints)
            })
            .then(() => resolve(true))
            .catch(error => console.log("Error in addPointsToUser"));
    });
};

export const getUserAvatar = (username) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(username)
            .get()
            .then(doc => resolve(doc.data().avatar))
            .catch(error => console.log("Error in getUserAvatar"));
    });
};

export const getUserProfile = (username) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(username)
            .get()
            .then(doc => resolve(_.merge(doc.data(), { username: username })))
            .catch(error => console.log("Error in getUserProfile"));
    });
};