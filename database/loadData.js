import { insertTips } from "./actions/Tips"
import { insertQuiz } from "./actions/Quiz";
import { insertQuest } from "./actions/Community";
import tipsData from "./data/tips.json";
import quizData from "./data/quiz.json";
import questData from "./data/quest.json";

export const loadData = () => {
    tipsData.forEach(data => insertTips(data));
    quizData.forEach(data  => insertQuiz(data));
    questData.forEach(data  => insertQuest(data));
}