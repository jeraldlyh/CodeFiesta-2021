import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MustKnowTips from "../screens/GetToKnowSingapore/MustKnowTips";

const Singapore = createStackNavigator();

const SingaporeStack = () => {
    return (
        <Singapore.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#fa3c4c" }, headerTintColor: "#ffffff" }}>
            <Singapore.Screen name="Tips" component={MustKnowTips} />
        </Singapore.Navigator>
    )
}

export default SingaporeStack;