import firebase from "../firebaseDB";

export const addPointsToUser = (newPoints, user) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(user)
            .update({
                points: firebase.firestore.FieldValue.increment(newPoints)
            })
            .then(() => resolve(true))
            .catch(error => {
                console.log(error);
                console.log("Error in addPointsToUser");
            });
    });
};