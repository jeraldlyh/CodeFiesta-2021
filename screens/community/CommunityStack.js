import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityScreen from "./CommunityScreen";


const Community = createStackNavigator();

const CommunityStack = () => {
    return (
        <Community.Navigator screenOptions={{ headerShown: false }}>
            <Community.Screen name="CommunityHome" component={CommunityScreen} />
        </Community.Navigator>
    )
}

export default CommunityStack;