import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MustKnowTips from "./MustKnowTips";
import GetToKnowSingapore from "./GetToKnowSingapore";
import QuizScreen from "./QuizScreen";

const Trivia = createStackNavigator();

const TriviaStack = () => {
    return (
        <Trivia.Navigator screenOptions={{ headerShown: false}}>
            <Trivia.Screen name="List" component={GetToKnowSingapore} />
            <Trivia.Screen name="Tips" component={MustKnowTips} />
            <Trivia.Screen name="Quiz" component={QuizScreen} />
        </Trivia.Navigator>
    )
}

export default TriviaStack;