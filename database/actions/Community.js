import firebase from "../firebaseDB";

export const isQuestExist = (data) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Quest")
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
                console.log("Error in isQuestExist");
            });
    });
};

export const insertQuest = (data) => {
    isQuestExist(data)
        .then(exist => {
            if (!exist) {
                firebase.firestore().collection("Quest")
                    .add({
                        title: data.title,
                        description: data.description,
                        points: data.points,
                        image: data.image,
                        createdAt: new Date().getTime(),
                        color: data.color,
                        available: true                         // Option to disable quest in the future
                    })
                    .then(doc => console.log(`Inserted quest ${doc.id}`))
                    .catch(error => console.log("Error in insertQuest"));
            };
        });
};

export const getAvailableQuests = () => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Quest")
            .where("available", "==", true)
            .get()
            .then(querySnapshot => {
                const quests = [];
                querySnapshot.forEach(doc => quests.push(doc.data()));
                resolve(quests);
            })
            .catch(error => {
                console.log(error)
                console.log("Error in getAvailableQuests");
            });
    });
};