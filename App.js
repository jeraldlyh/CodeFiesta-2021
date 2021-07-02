import React, { useEffect, useState } from 'react';
import AuthContextProvider from './provider/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from "expo-font";
import RootStack from './screens/RootStack';
import ProfileStack from './screens/profile/ProfileStack';
import NewsStack from './screens/news/NewsStack';
import DocumentStack from './screens/document/DocumentStack';
import ApplicationStack from './screens/application/ApplicationStack';
import CommunityStack from './screens/community/CommunityStack';
import { loadData } from './database/loadData';
import Loading from './components/Loading';

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Poppins-Normal": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
        });
        setIsLoaded(true);
    };

    useEffect(() => {       // Load default fonts
        loadData();
        loadFonts();
    }, [])

    return (
        isLoaded
            ? (
                <AuthContextProvider>
                    <NavigationContainer>
                        <RootStack />
                    </NavigationContainer>
                </AuthContextProvider>
            )
            : (
                <Loading />
            )

    );
}