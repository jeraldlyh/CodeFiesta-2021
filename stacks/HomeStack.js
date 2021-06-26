import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";



const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#fa3c4c" }, headerTintColor: "#ffffff" }}>
            
        </Home.Navigator>
    )
}

export default HomeStack;