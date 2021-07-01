import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MustKnowTips from "./MustKnowTips";
import GetToKnowSingapore from "./GetToKnowSingapore";
import QuizScreen from "./QuizScreen";

const Singapore = createStackNavigator();

const SingaporeStack = () => {
    return (
        <Singapore.Navigator screenOptions={{ headerShown: false}}>
            <Singapore.Screen name="List" component={GetToKnowSingapore} />
            <Singapore.Screen name="Tips" component={MustKnowTips} />
            <Singapore.Screen name="Quiz" component={QuizScreen} />
        </Singapore.Navigator>
    )
}

export default SingaporeStack;