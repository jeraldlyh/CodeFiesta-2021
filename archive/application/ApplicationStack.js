import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ApplicationScreen from "./ApplicationScreen";
import DocumentStack from "../../screens/document/DocumentStack";


const Application = createStackNavigator();

const ApplicationStack = () => {
    return (
        <Application.Navigator screenOptions={{ headerShown: false }}>
            <Application.Screen name="Application" component={ApplicationScreen} />
            <Application.Screen name="Work Permit" component={DocumentStack} />
        </Application.Navigator>
    )
}

export default ApplicationStack;