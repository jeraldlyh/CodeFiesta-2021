import React from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";


function Card(props) {
    return (
        <View style={tailwind("flex flex-col h-64 w-44 border-2 rounded-lg items-center p-3 shadow-lg")}>
            <TouchableOpacity>
                <Image source={props.image} style={tailwind("h-28 w-40 rounded-lg")} />
                <View style={tailwind("flex flex-col items-start mt-2")}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    description: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold"
    }
})


export default Card;