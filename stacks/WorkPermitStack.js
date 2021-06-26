import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import UserScreen from "../screens/UserScreen";



const WorkPermit = createStackNavigator();

const WorkPermitStack = () => {
    return (
        <WorkPermit.Navigator screenOptions={{ headerShown: true }}>
            <WorkPermit.Screen name="Start" component={StartScreen}/>
            <WorkPermit.Screen name="User" component={UserScreen}/>
        </WorkPermit.Navigator>
    )
}

export default WorkPermitStack;