import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from "react-native-paper";
import tailwind from "tailwind-rn";


function CustomCard(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Card style={tailwind("h-48 w-40 rounded-lg ml-1")}>
                <Card.Cover source={props.source} style={tailwind("h-20 rounded-lg")} />
                <View style={tailwind("p-3")}>
                    <Text style={[styles.title, tailwind("text-left text-xs")]}>{props.title}</Text>
                    <Text style={[styles.description, tailwind("text-left text-xs")]}>{props.description}</Text>
                </View>
            </Card>
        </TouchableOpacity>
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


export default CustomCard;