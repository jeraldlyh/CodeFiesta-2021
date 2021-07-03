import React, { useContext } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from "../home/HomeStack";
import ProfileStack from "../profile/ProfileStack";
import ChatStack from "../chat/ChatStack";
import NotifStack from "../notifications/NotifStack";
import { AuthContext } from "../../provider/AuthProvider";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    const { username } = useContext(AuthContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                    } else if (route.name === 'Chat') {
                        iconName = focused
                            ? 'chatbubble-ellipses'
                            : 'chatbubble-ellipses-outline';
                    } else if (route.name === 'Notifs') {
                        iconName = focused
                            ? 'notifications'
                            : 'notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    };

                    return <Ionicons name={iconName} size={size} color={focused ? "#2B2B2B" : "#AEAEB2"} />;
                },
            })}
            tabBarOptions={{
                labelStyle: {
                    fontFamily: "Poppins-Bold"
                },
                activeTintColor: "#2B2B2B",
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Chat" component={ChatStack} />
            <Tab.Screen name="Notifs" component={NotifStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
};

export default TabStack;