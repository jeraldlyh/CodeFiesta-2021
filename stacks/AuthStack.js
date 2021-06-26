import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";


const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#fa3c4c" }, headerTintColor: "#ffffff" }}>
            <Auth.Screen name="Welcome" component={WelcomeScreen} />
            <Auth.Screen name="Login" component={LoginScreen} />
        </Auth.Navigator>
    )
}

export default AuthStack;