import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Singapore = createStackNavigator();

const SingaporeStack = () => {
    return (
        <Singapore.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#fa3c4c" }, headerTintColor: "#ffffff" }}>

        </Singapore.Navigator>
    )
}

export default SingaporeStack;