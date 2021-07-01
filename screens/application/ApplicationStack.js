import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ApplicationScreen from "./ApplicationScreen";
import WorkPermitStack from "../document/WorkPermitStack";


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