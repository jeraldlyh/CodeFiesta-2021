import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsHomeScreen from "./NewsHomeScreen";
import CurrentNewsScreen from "./CurrentNewsScreen";


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