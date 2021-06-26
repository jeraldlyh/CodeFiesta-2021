import React, { useState } from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import { TextInput, Button } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loaded, error] = useFonts({
        Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    });

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
                <LinearGradient colors={["rgba(255, 255, 255, 0)", "rgba(32, 32, 32, .95)", "rgba(32, 32, 32, 1)"]} style={styles.overlay} />
                    <View style={tailwind("w-full items-center justify-center")}>
                    <TextInput
                        mode="flat"
                        label="Email"
                        theme= {{colors: { primary: "#fa3c4c"}}}
                        style={[tailwind("h-14 w-4/5 rounded-lg"), styles.text]}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        keyboardType="email-address"
                    />
                    <TextInput
                        mode="flat"
                        label="Password"
                        theme= {{colors: { primary: "#fa3c4c" }}}
                        style={tailwind("h-14 w-4/5 rounded-lg mt-3")}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                    />
                    <Button onPress={() => loginUser()} labelStyle={tailwind("text-white")} style={[tailwind("rounded-lg mt-8 w-4/5"), styles.button]}>
                        <Text>Login</Text>
                    </Button>
                    
                    <View style={tailwind("mt-20 w-5/6 border-b-2 border-gray-700")}/>

                    <Button labelStyle={tailwind("text-black")} style={[tailwind("rounded-lg w-4/5 mt-8 bg-gray-300"), styles.singpass]}>
                        <Text>Login with</Text>
                    </Button>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FE904B",
        fontFamily: "Poppins"
    },
    singpass: {
        borderColor: "#FE904B",
        border: "5px solid #FE904B",
        fontFamily: "Poppins"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.95
    },
    input: {
        height: 40,
        width: "80%",
    },
    text: {
        fontFamily: "Poppins"
    }
});


export default LoginScreen;