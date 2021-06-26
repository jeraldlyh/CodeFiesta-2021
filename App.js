import React from 'react';
import AuthContextProvider from './provider/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import SingaporeStack from './stacks/SingaporeStack';

export default function App() {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <SingaporeStack/>
            </NavigationContainer>
        </AuthContextProvider>
    );
}