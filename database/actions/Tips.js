import firebase from "../firebaseDB";
import _ from "lodash";

export const isTipExist = (data) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Tips")
            .where("title", "==", data.title)
            .get()
            .then(querySnapshot => {
                const dataArray = []
                querySnapshot.forEach(doc => dataArray.push(doc.data()))

                if (dataArray.length !== 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(error => {
                console.log("Error in isTipExist");
            })
    })
}

export const insertTips = (data) => {
    isTipExist(data)
        .then(exist => {
            if (!exist) {
                firebase.firestore().collection("Tips")
                    .add({
                        title: data.title,
                        body: data.body,
                        url: data.url,
                        tag: data.tag
                    })
                    .then(doc => console.log(`Inserted tip ${doc.id}`))
                    .catch(error => console.log("Error in insertTips"));
            }
        })
}

export const getTipsByTag = (tag) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Tips")
            .where("tag", "==", tag)
            .get()
            .then(querySnapshot => {
                const dataArray = []
                querySnapshot.forEach(doc => dataArray.push(doc.data()))
                resolve(dataArray);
            })
            .catch(error => {
                console.log("Error in isTipExist");
            })
    })
}