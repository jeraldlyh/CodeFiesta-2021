import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../components/Button";

function VisaScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const isActive = (index) => {
        return activeIndex === index;
    };

    return (
        <View style={tailwind("flex flex-col w-full h-full p-3 items-center")}>
            <Text style={[styles.title, tailwind("text-3xl p-3 text-center mt-5")]}>Getting ready your work visa</Text>
            <View style={tailwind("mt-6")}/>
            <Button onPress={() => setActiveIndex(1)} text="I do not have a work visa" backgroundColor={isActive(1) ? "#FE904B": "#FFF"} textColor={isActive(1) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-6")}/>
            <Button onPress={() => setActiveIndex(2)} text="I have a work visa" backgroundColor={isActive(2) ? "#FE904B": "#FFF"} textColor={isActive(2) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-8 flex flex-col w-4/5 items-center")}>
                <Button onPress={() => navigation.push("Visa Type")} text="Confirm" backgroundColor="#FE904B" textColor="#FFF" height="12" />
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

export default VisaScreen;