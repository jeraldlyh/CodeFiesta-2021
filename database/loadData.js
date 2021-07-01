import { insertTips } from "./actions/Tips"
import { insertQuiz } from "./actions/Quiz";
import tipsData from "./data/tips.json";
import quizData from "./data/quiz.json";

export const loadData = () => {
    tipsData.forEach(data => insertTips(data));
    quizData.forEach(data  => insertQuiz(data));
}