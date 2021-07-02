import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SingaporeStack from "../trivia/SingaporeStack";
import DocumentStack from "../document/DocumentStack";
import NewsStack from "../news/NewsStack";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="Document" component={DocumentStack} />
            <Home.Screen name="Trivia" component={SingaporeStack} />
            <Home.Screen name="News" component={NewsStack} />
        </Home.Navigator>
    )
}

export default HomeStack;