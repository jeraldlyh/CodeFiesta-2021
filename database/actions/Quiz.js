import firebase from "../firebaseDB";
import _ from "lodash";

export const isQuizExist = (data) => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Quiz")
            .where("question", "==", data.question)
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
                console.log("Error in isQuizExist");
            })
    })
}


export const insertQuiz = (data) => {
    isQuizExist(data)
        .then(exist => {
            if (!exist) {
                firebase.firestore().collection("Quiz")
                    .add({
                        question: data.question,
                        options: data.options,
                        answer: data.answer,
                        tag: data.tag
                    })
                    .then(doc => console.log(`Inserted quiz ${doc.id}`))
                    .catch(error => console.log("Error in insertQuiz"));
            }
        })
}

export const getRandomQuiz = () => {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection("Quiz")
            .get()
            .then(querySnapshot => {
                const quizzes = [];
                querySnapshot.forEach(doc => quizzes.push(doc.data()));
                resolve(_.sample(quizzes));
            })
            .catch(error => {
                console.log("Error in getRandomQuiz");
            })
    })
}