import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchBar } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";



const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#fa3c4c" }, headerTintColor: "#ffffff" }}>
            <Home.Screen name="Home" component={HomeScreen}/>
        </Home.Navigator>
    )
}

export default HomeStack;