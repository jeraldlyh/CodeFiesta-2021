import React, { useState } from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../components/Button";
import { Icon } from "react-native-elements";

function UserScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const isActive = (index) => {
        return activeIndex === index;
    };

    return (
        <View style={tailwind("flex flex-col w-full h-full p-3 items-center")}>
            <Text style={[styles.title, tailwind("text-3xl p-3 text-center mt-5")]}>What kind of user are you?</Text>
            <View style={tailwind("mt-6")}/>
            <Button onPress={() => setActiveIndex(1)} text="I'm moving for work" backgroundColor={isActive(1) ? "#FE904B": "#FFF"} textColor={isActive(1) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-6")}/>
            <Button onPress={() => setActiveIndex(2)} text="I'm moving for school / to reunite with my family" backgroundColor={isActive(2) ? "#FE904B": "#FFF"} textColor={isActive(2) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-6")}/>
            <Button onPress={() => setActiveIndex(3)} text="I wish to be a permanent resident (PR)" backgroundColor={isActive(3) ? "#FE904B": "#FFF"} textColor={isActive(3) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-8 flex flex-col w-4/5 items-center")}>
                <Button onPress={() => navigation.push("Visa")} text="Confirm" backgroundColor="#FE904B" textColor="#FFF" height="12" />
                <View style={tailwind("mt-3")}/>
                <Button onPress={() => navigation.goBack()} text="Cancel" backgroundColor="#FE904B" textColor="#FFF" height="12" />
            </View>
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

export default UserScreen;