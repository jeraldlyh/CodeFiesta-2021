import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SingaporeStack from "../stacks/SingaporeStack";
import WorkPermitStack from "./WorkPermitStack";
import { useRoute } from "@react-navigation/native";
import NewsHomeScreen from "../screens/NewsHomeScreen";
import CurrentNewsScreen from "../screens/CurrentNewsScreen";


const News = createStackNavigator();

const NewsStack = () => {
    return (
        <News.Navigator screenOptions={{ headerShown: false }}>
            <News.Screen name="NewsHome" component={NewsHomeScreen} />
            <News.Screen name="CurrentNews" component={CurrentNewsScreen} />
        </News.Navigator>
    )
}

export default NewsStack;