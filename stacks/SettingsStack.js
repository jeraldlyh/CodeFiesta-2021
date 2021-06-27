import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SettingsScreen from "../screens/SettingsScreen";


const Settings = createStackNavigator();

const SettingsStack = () => {
    return (
        <Settings.Navigator screenOptions={{ headerShown: false }}>
            <Settings.Screen name="SettingsHome" component={SettingsScreen} />
        </Settings.Navigator>
    )
}

export default SettingsStack;