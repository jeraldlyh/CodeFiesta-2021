import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SingaporeStack from "../singapore/SingaporeStack";
import WorkPermitStack from "../../stacks/WorkPermitStack";
import NewsStack from "./NewsStack";


const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="Work Permit" component={WorkPermitStack} />
            <Home.Screen name="Get To Know Singapore" component={SingaporeStack} />
            <Home.Screen name="CurrentNews" component = {NewsStack} />
        </Home.Navigator>
    )
}

export default HomeStack;