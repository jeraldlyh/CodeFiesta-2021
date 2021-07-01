import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";

const Profile = createStackNavigator();

const ProfileStack = () => {
    return (
        <Profile.Navigator screenOptions={{ headerShown: false }}>
            <Profile.Screen name="Profile" component={ProfileScreen} />
        </Profile.Navigator>
    )
}

export default ProfileStack;