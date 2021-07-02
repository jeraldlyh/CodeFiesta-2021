import React from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import tailwind from "tailwind-rn";
import Button from "../../components/Button";
import Title from "../../components/Title";


function WelcomeScreen({ navigation }) {
    return (
        <>
            <Swiper autoplay={true} showsPagination={false}>
                <ImageBackground source={require("../../assets/welcome/1.webp")} style={styles.image}>
                    <View style={[tailwind("flex flex-col text-white self-end px-9 pb-4 font-normal"), { fontSize: 28, marginTop: 200 }]}>
                        <Title fontSize={28} />
                    </View>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), { fontSize: 21, marginTop: 10 }]}>Step-by-step guide for your migration process</Text>
                </ImageBackground>
                <ImageBackground source={require("../../assets/welcome/2.webp")} style={styles.image}>
                    <View style={[tailwind("flex flex-col text-white self-end px-9 pb-4 font-normal"), { fontSize: 28, marginTop: 200 }]}>
                        <Title fontSize={28} />
                    </View>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), { fontSize: 21, marginTop: 10 }]}>Stay updated with new changes in the community</Text>
                </ImageBackground>
                <ImageBackground source={require("../../assets/welcome/3.webp")} style={styles.image}>
                    <View style={[tailwind("flex flex-col text-white self-end px-9 pb-4 font-normal"), { fontSize: 28, marginTop: 200 }]}>
                        <Title fontSize={28} />
                    </View>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), { fontSize: 21, marginTop: 10 }]}>Learn more about Singapore and make new friends</Text>
                </ImageBackground>
            </Swiper>

            <View style={[tailwind("absolute flex flex-col text-white self-center pl-14 w-80 pb-4 font-extrabold"), { fontSize: 21, bottom: 165 }]}>
                <Button onPress={() => navigation.push('Login')} text="Login" backgroundColor="#FE904B" textColor="#FFF" height={14} />
                <TouchableOpacity onPress={() => navigation.push("Register")}>
                    <Text style={[tailwind("flex flex-row text-white pt-5 pl-2 font-normal"), { fontSize: 13 }]}>Don't have an account? <Text style={[tailwind("font-semibold"), { color: "#FE904B" }]}>Sign up</Text></Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    image: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center"
    },
});


export default WelcomeScreen;