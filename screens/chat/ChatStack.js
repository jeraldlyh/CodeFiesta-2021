import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from "./ChatScreen";
import RoomScreen from "./RoomScreen";

const Chat = createStackNavigator();


function ChatStack() {
    return (
        <Chat.Navigator screenOptions={{ headerShown: false }}>
            <Chat.Screen name="Chat" component={ChatScreen} />
            <Chat.Screen name="Room" component={RoomScreen} />
        </Chat.Navigator>
    );
};

export default ChatStack;