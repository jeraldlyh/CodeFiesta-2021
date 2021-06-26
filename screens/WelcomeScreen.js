import React from "react";
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import tailwind from "tailwind-rn";
import Button from "../components/Button";


function WelcomeScreen({navigation}) {
    return (
        <>
            <Swiper autoplay={true} showsPagination={false}>
                <ImageBackground source={require("../assets/welcome/1.png")} style={styles.image}>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), {fontSize: 21, marginTop:300}]}>Step-by-step guide for your migration process</Text>
                </ImageBackground>
                <ImageBackground source={require("../assets/welcome/2.png")} style={styles.image}>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), {fontSize: 21, marginTop:300}]}>Stay updated with new changes in the community</Text>
                </ImageBackground>
                <ImageBackground source={require("../assets/welcome/3.png")} style={styles.image}>
                    <Text style={[tailwind("flex flex-col text-white self-center px-9 pb-4 font-extrabold"), {fontSize: 21, marginTop:300}]}>Learn more about Singapore and make new friends</Text>
                </ImageBackground>
            </Swiper>

            <View style={[tailwind("absolute flex flex-col text-white self-center pl-14 w-80 pb-4 font-extrabold"), {fontSize: 21, marginTop:605}]}>
                <Button onPress={() => navigation.push('Login')} text="Login" backgroundColor="#FE904B"/>
                <Text style={[tailwind("flex flex-row text-white pt-5 pl-2 font-normal"), {fontSize: 13}]}>Don't have an account? <Text style={[tailwind("font-semibold"), {color:"#FE904B"}]}>Sign up</Text></Text>
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