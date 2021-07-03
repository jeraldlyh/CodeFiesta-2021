import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotifScreen from "./NotifScreen";


const Notifs = createStackNavigator();

const NotifStack = () => {
    return (
        <Notifs.Navigator screenOptions={{ headerShown: false }}>
            <Notifs.Screen name="Notifs" component={NotifScreen} />
        </Notifs.Navigator>
    )
}

export default NotifStack;