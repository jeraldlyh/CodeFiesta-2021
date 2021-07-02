import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DocumentScreen from "./DocumentScreen";
import StartScreen from "./StartScreen";
import UserScreen from "./UserScreen";
import VisaScreen from "./VisaScreen";
import VisaTypeScreen from "./VisaTypeScreen";
import UploadScreen from "./UploadScreen";
import SuccessScreen from "./SuccessScreen";

const Document = createStackNavigator();

const DocumentStack = () => {
    return (
        <Document.Navigator screenOptions={{ headerShown: false }}>
            <Document.Screen name="DocumentScreen" component={DocumentScreen} />
            <Document.Screen name="Start" component={StartScreen} />
            <Document.Screen name="User" component={UserScreen} />
            <Document.Screen name="Visa" component={VisaScreen} />
            <Document.Screen name="Visa Type" component={VisaTypeScreen} />
            <Document.Screen name="Upload" component={UploadScreen} />
            <Document.Screen name="Success" component={SuccessScreen} />
        </Document.Navigator>
    )
}

export default DocumentStack;