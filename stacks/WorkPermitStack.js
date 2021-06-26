import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import UserScreen from "../screens/UserScreen";
import VisaScreen from "../screens/VisaScreen";
import VisaTypeScreen from "../screens/VisaTypeScreen";


const WorkPermit = createStackNavigator();

const WorkPermitStack = () => {
    return (
        <WorkPermit.Navigator screenOptions={{ headerShown: true }}>
            <WorkPermit.Screen name="Start" component={StartScreen}/>
            <WorkPermit.Screen name="User" component={UserScreen}/>
            <WorkPermit.Screen name="Visa" component={VisaScreen}/>
            <WorkPermit.Screen name="Visa Type" component={VisaTypeScreen}/>
        </WorkPermit.Navigator>
    )
}

export default WorkPermitStack;