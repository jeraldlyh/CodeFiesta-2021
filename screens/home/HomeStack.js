import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SingaporeStack from "../singapore/SingaporeStack";
import DocumentStack from "../document/DocumentStack";
import NewsStack from "../news/NewsStack";


const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="Work Permit" component={DocumentStack} />
            <Home.Screen name="Get To Know Singapore" component={SingaporeStack} />
            <Home.Screen name="News" component={NewsStack} />
        </Home.Navigator>
    )
}

export default HomeStack;