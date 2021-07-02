import React, { useState, useContext } from "react";
import { View, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import { TextInput } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../../components/Button";
import { AuthContext } from "../../provider/AuthProvider";
import { registerUser } from "../../database/actions/Auth";

function RegisterScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn, setUsername } = useContext(AuthContext);

    const submitLogin = () => {     // To integrate Singpass API
        setUsername("testing");
        setIsLoggedIn(true);
    };

    const submitRegister = () => {
        registerUser(name, email, password).then(username => {
            setUsername(username);
            setIsLoggedIn(true);
        });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={tailwind("flex-1 items-center justify-center")}>
                <Image source={require("../../assets/login/backgroundTwo.jpg")} style={StyleSheet.absoluteFillObject} />
                <LinearGradient colors={["rgba(255, 255, 255, 0)", "rgba(32, 32, 32, .7)", "rgba(32, 32, 32, 1)"]} style={StyleSheet.absoluteFillObject} />
                <View style={tailwind("w-full items-center justify-center")}>
                    <View style={tailwind("w-4/5 pb-8")}>
                        <Text style={[styles.header, tailwind("text-4xl text-black")]}>Welcome</Text>
                        <Text style={[styles.text, tailwind("text-xl")]}>Fill in your details to begin</Text>
                    </View>
                    <TextInput
                        mode="flat"
                        label="Full Name"
                        style={tailwind("h-14 w-4/5 rounded-xl")}
                        value={name}
                        onChangeText={name => setName(name)}
                    />
                    <TextInput
                        mode="flat"
                        label="Email"
                        style={tailwind("h-14 w-4/5 rounded-xl mt-3 mb-3")}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        keyboardType="email-address"
                    />
                    <TextInput
                        mode="flat"
                        label="Password"
                        style={tailwind("h-14 w-4/5 rounded-xl mb-5")}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                    />
                    <Button onPress={() => submitRegister()} text="Sign Up" backgroundColor="#FE904B" textColor="#FFF" />

                    <View style={tailwind("mt-14 mb-3 w-5/6 border-b-2 border-gray-700")} />
                    
                    <Text style={[styles.text, tailwind("text-white mb-2")]}>Returning Singaporean or PR?</Text>
                    <Button onPress={() => submitLogin()} text="Login with" backgroundColor="#D0D0D0" textColor="#000" style={tailwind("items-center")}>
                        <Image source={require("../../assets/login/singpass.png")} style={[tailwind("mt-1"), styles.singpass]} />
                    </Button>
                    <View style={tailwind("w-4/6")}>
                        <Text style={[styles.text, tailwind("text-center text-white mt-2")]}>By signing up, I agree with Terms of Use and Privacy Policy</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    text: {
        fontFamily: "Poppins-Normal"
    },
    singpass: {
        height: 12.2,
        width: 70
    }
});


export default RegisterScreen;