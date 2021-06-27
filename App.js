import React, { useEffect, useState } from 'react';
import AuthContextProvider from './provider/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import * as Font from "expo-font";
import RootStack from './stacks/RootStack';
import HomeStack from './stacks/HomeStack';
import SingaporeStack from './stacks/SingaporeStack';
import AuthStack from './stacks/AuthStack';
import WorkPermitStack from './stacks/WorkPermitStack';
import NewsStack from './stacks/NewsStack';
import CommunityScreen from './screens/CommunityScreen';
import SettingsScreen from './screens/SettingsScreen';
import SettingsStack from './stacks/SettingsStack';


export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Poppins-Normal": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
        });
        setIsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, [])

    return (
            isLoaded
                ? (
                    <AuthContextProvider>
                        <NavigationContainer>
                            <RootStack/>
                        </NavigationContainer>
                    </AuthContextProvider>
                )
                : (
                    <View><Text>Still Loading</Text></View>
                )
        
    );
}