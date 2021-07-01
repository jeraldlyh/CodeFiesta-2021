import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./StartScreen";
import UserScreen from "./UserScreen";
import VisaScreen from "./VisaScreen";
import VisaTypeScreen from "./VisaTypeScreen";


const WorkPermit = createStackNavigator();

const WorkPermitStack = () => {
    return (
        <WorkPermit.Navigator screenOptions={{ headerShown: false }}>
            <WorkPermit.Screen name="Start" component={StartScreen}/>
            <WorkPermit.Screen name="User" component={UserScreen}/>
            <WorkPermit.Screen name="Visa" component={VisaScreen}/>
            <WorkPermit.Screen name="Visa Type" component={VisaTypeScreen}/>
        </WorkPermit.Navigator>
    )
}

export default WorkPermitStack;