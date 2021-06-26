import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../components/Button";

function StartScreen({ navigation }) {
    return (
        <View style={tailwind("flex flex-col w-full h-full p-3 items-center")}>
            <Text style={[styles.title, tailwind("text-3xl p-3 text-center mt-5")]}>Lets apply for your work pass!</Text>
            <Image style={tailwind("mb-3")} source={require("../assets/work_permit/image.png")} />
            <Button onPress={() => navigation.push("User")} text="Start application process" backgroundColor="#FE904B" textColor="#FFF" />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    }
})

export default StartScreen;