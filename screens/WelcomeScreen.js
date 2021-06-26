import React from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import tailwind from "tailwind-rn";



function WelcomeScreen() {
    return (
        <Swiper buttonWrapperStyle={styles.buttonWrapperStyle} showsButtons={true}>
            <ImageBackground source={require("../assets/login/backgroundOne.jpg")} style={styles.image} />
            <ImageBackground source={require("../assets/login/backgroundTwo.jpg")} style={styles.image} />
        </Swiper>
    )
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttonWrapperStyle: {
        backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'
    }
});


export default WelcomeScreen;