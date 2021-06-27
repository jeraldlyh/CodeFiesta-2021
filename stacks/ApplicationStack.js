import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import UserScreen from "../screens/UserScreen";
import VisaScreen from "../screens/VisaScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import WorkPermitStack from "./WorkPermitStack";


const Application = createStackNavigator();

const ApplicationStack = () => {
    return (
        <Application.Navigator screenOptions={{ headerShown: false }}>
            <Application.Screen name="Application" component={ApplicationScreen} />
            <Application.Screen name="Work Permit" component={WorkPermitStack} />
        </Application.Navigator>
    )
}

export default ApplicationStack;