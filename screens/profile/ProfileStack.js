import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";

const Profile = createStackNavigator();

const ProfileStack = () => {
    return (
        <Profile.Navigator screenOptions={{ headerShown: false }}>
            <Profile.Screen name="Profile" component={ProfileScreen} />
            <Profile.Screen name="Settings" component={SettingsScreen} />
        </Profile.Navigator>
    )
}

export default ProfileStack;