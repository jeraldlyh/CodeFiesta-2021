import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsStack from "../news/NewsStack";
import SingaporeStack from "../singapore/SingaporeStack";
import ApplicationStack from "../application/ApplicationStack";
import CommunityStack from "../community/CommunityStack";
import ChatStack from "../chat/ChatStack";


const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Trivia') {
                        iconName = focused
                            ? 'help-circle'
                            : 'help-circle-outline'
                    } else if (route.name === 'Apply') {
                        iconName = focused
                            ? 'create'
                            : 'create-outline';
                    } else if (route.name === 'News') {
                        iconName = focused
                            ? 'newspaper'
                            : 'newspaper-outline';
                    } else if (route.name === 'Community') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color="#AEAEB2" />;
                },
            })}
            tabBarOptions={{
                labelStyle: {
                    fontFamily: "Poppins-Bold"
                },
                activeTintColor: "#000",
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Trivia" component={SingaporeStack} />
            <Tab.Screen name="Apply" component={ApplicationStack} />
            <Tab.Screen name="News" component={ChatStack} />
            <Tab.Screen name="Community" component={CommunityStack} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Normal"
    },
    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
    },
})

export default TabStack;