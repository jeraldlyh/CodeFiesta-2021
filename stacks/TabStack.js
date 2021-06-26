import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-elements";
import HomeStack from "./HomeStack";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Chat') {
                    iconName = focused
                    ? 'chatbubble'
                    : 'chatbubble-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused
                    ? 'person'
                    : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color="#fa3c4c" />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "#fa3c4c",
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home"  component={HomeStack} />
            {/* 
            <Tab.Screen name="Chat" component={RootChatStack} />
            <Tab.Screen name="Profile" component={RootProfileStack} /> */}
        </Tab.Navigator>
    )
}

export default TabStack;