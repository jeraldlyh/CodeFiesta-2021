import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../provider/AuthProvider";
import AuthStack from "./authentication/AuthStack";
import TabStack from "./misc/TabStack";


const Root = createStackNavigator();

const RootStack = () => {
    const { isLoggedIn } = useContext(AuthContext);


    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {
                isLoggedIn 
                    ? <Root.Screen name="Tab" component={TabStack} />
                    : <Root.Screen name="Auth" component={AuthStack}/>
            }
        </Root.Navigator>
    )
}

export default RootStack;