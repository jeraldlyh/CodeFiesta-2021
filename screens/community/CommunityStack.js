import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityScreen from "./CommunityScreen";
import QuestsScreen from "./QuestsScreen";
import RoomScreen from "../chat/RoomScreen";

const Community = createStackNavigator();

const CommunityStack = () => {
    return (
        <Community.Navigator screenOptions={{ headerShown: false }}>
            <Community.Screen name="CommunityHome" component={CommunityScreen} />
            <Community.Screen name="Quests" component={QuestsScreen} />
            <Community.Screen name="Chat" component={RoomScreen} />
        </Community.Navigator>
            )
}

            export default CommunityStack;