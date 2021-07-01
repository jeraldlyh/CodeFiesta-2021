import firebase from "../firebaseDB";

export const insertQuiz = (question, options, answer) => {
    firebase.firestore().collection("Quiz")
        .add({
            question: question,
            options: options,
            answer: answer
        })
        .then(doc => console.log(`Inserted quiz ${doc.id}`))
        .catch(error => console.log("Error in insertQuiz"));
}