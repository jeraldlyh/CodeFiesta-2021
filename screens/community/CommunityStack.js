import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityScreen from "./CommunityScreen";
import QuestsScreen from "./QuestsScreen";


const Community = createStackNavigator();

const CommunityStack = () => {
    return (
        <Community.Navigator screenOptions={{ headerShown: false }}>
            <Community.Screen name="CommunityHome" component={CommunityScreen} />
            <Community.Screen name="Quests" component = {QuestsScreen} />
        </Community.Navigator>
    )
}

export default CommunityStack;