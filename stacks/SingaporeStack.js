import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MustKnowTips from "../screens/MustKnowTips";
import GetToKnowSingapore from "../screens/GetToKnowSingapore";

const Singapore = createStackNavigator();

const SingaporeStack = () => {
    return (
        <Singapore.Navigator screenOptions={{ headerShown: false}}>
            <Singapore.Screen name="list" component={GetToKnowSingapore} />
            <Singapore.Screen name="Tips" component={MustKnowTips} />
        </Singapore.Navigator>
    )
}

export default SingaporeStack;