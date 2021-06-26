import React, { useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import { TextInput } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../components/Button";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        console.log("Logging in");
    };

    const registerUser = () => {
        console.log("Register user");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={tailwind("flex-1 items-center justify-center")}>
                <Image source={require("../assets/login/backgroundTwo.jpg")} style={StyleSheet.absoluteFillObject} />
                <LinearGradient colors={["rgba(255, 255, 255, 0)", "rgba(32, 32, 32, .95)", "rgba(32, 32, 32, 1)"]} style={StyleSheet.absoluteFillObject} />
                    <View style={tailwind("w-full items-center justify-center")}>
                    <TextInput
                        mode="flat"
                        label="Email"
                        style={tailwind("h-14 w-4/5 rounded-lg")}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        keyboardType="email-address"
                        />
                    <TextInput
                        mode="flat"
                        label="Password"
                        style={tailwind("h-14 w-4/5 rounded-lg mt-3 mb-5")}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                    />
                    <Button onPress={() => loginUser()} text="Login" backgroundColor="#FE904B"/>
                    
                    <View style={tailwind("mt-14 mb-3 w-5/6 border-b-2 border-gray-700")}/>

                    <Button onPress={() => loginUser()} text="Login with" backgroundColor="#515250">
                        <Text styles={[tailwind("text-lg"), styles.text]}>aaa</Text>
                    </Button>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
});


export default LoginScreen;