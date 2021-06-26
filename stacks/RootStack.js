import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../provider/AuthProvider";
import AuthStack from "./AuthStack";
import TabStack from "./TabStack";


const Root = createStackNavigator();

const RootStack = () => {
    const { isLoggedIn } = useContext(AuthContext);


    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {
                isLoggedIn 
                    ? <Root.Screen name="Auth" component={AuthStack}/>
                    : <Root.Screen name="Tab" component={TabStack} />
            }
        </Root.Navigator>
    )
}

export default RootStack;