import firebase from "../firebaseDB";
import * as Location from 'expo-location';

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
                        action: data.action,
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

export const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status) {
        let { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

        if (coords) {
            return coords;
        };
    };
};

export const getCurrentLocationDB = (username) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("User")
            .doc(username)
            .get()
            .then(doc => resolve(doc.data().location))
            .catch(error => console.log("Error in getCurrentLocationDB"));
    });
};

export const updateLocation = (username) => {
    return new Promise((resolve, reject) => {
        getCurrentLocation().then(coords => {
            firebase.firestore().collection("User")
                .doc(username)
                .update({
                    location: {
                        longitude: coords.longitude,
                        latitude: coords.latitude
                    }
                })
                .then(() => resolve())
                .catch(error => console.log("Error in updateLocation"));
        });
    });
};

export const getCommunityPlayers = () => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Community")
            .doc("Community")
            .get()
            .then(doc => {
                const players = []
                doc.data().players.forEach(player => {
                    getCurrentLocationDB(player).then(location => players.push(location));
                })
                resolve(players);
            })
            .catch(error => console.log(error));
    });
};

export const createCommunity = () => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Community")
            .doc("Community")
            .get()
            .then(doc => {
                if (doc.exists) {
                    resolve(true);
                } else {
                    firebase.firestore().collection("Community")
                        .doc("Community")
                        .set({
                            players: []
                        });
                };
            });
    });
};

export const goOnline = (username) => {
    firebase.firestore().collection("Community")
        .doc("Community")
        .update({
            players: firebase.firestore.FieldValue.arrayUnion(username)
        });
};

export const goOffline = (username) => {
    firebase.firestore().collection("Community")
        .doc("Community")
        .update({
            players: firebase.firestore.FieldValue.arrayRemove(username)
        });
};