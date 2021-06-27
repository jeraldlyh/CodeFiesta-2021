import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SingaporeStack from "../stacks/SingaporeStack";
import WorkPermitStack from "./WorkPermitStack";
import { useRoute } from "@react-navigation/native";


const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="Work Permit" component={WorkPermitStack} />
            <Home.Screen name="Get To Know Singapore" component={SingaporeStack} />
        </Home.Navigator>
    )
}

export default HomeStack;