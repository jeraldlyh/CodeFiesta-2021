import React from 'react';
import AuthContextProvider from './provider/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './stacks/RootStack';



export default function App() {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </AuthContextProvider>
    );
}