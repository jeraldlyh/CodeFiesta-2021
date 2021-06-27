import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MustKnowTips from "../screens/MustKnowTips";
import GetToKnowSingapore from "../screens/GetToKnowSingapore";
import QuizScreen from "../screens/QuizScreen";

const Singapore = createStackNavigator();

const SingaporeStack = () => {
    return (
        <Singapore.Navigator screenOptions={{ headerShown: false}}>
            <Singapore.Screen name="list" component={GetToKnowSingapore} />
            <Singapore.Screen name="Tips" component={MustKnowTips} />
            <Singapore.Screen name="Quiz" component={QuizScreen} />
        </Singapore.Navigator>
    )
}

export default SingaporeStack;