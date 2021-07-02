import React, { useEffect } from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import tailwind from "tailwind-rn";

function Options(props) {
    var image;
    useEffect(() => {
        switch (props.name) {
            case "Apply":
                image = require("../../../assets/icons/apply.png");
                break;
            case "Trivia":
                image = require("../../../assets/icons/trivia.png");
                break;
            case "News":
                image = require("../../../assets/icons/news.png");
                break;
            case "Community":
                image = require("../../../assets/icons/community.png");
                break;
        }
        console.log(typeof image)
    });


    return (
        <View
            style={[styles.container, tailwind("items-center justify-center")]}
        >
            <Image source={image} style = {styles.image}/>
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 144,
        height: 70,
        borderWidth: 1,
        borderRadius: 14,
    },
    image:{
        height:25,
        width:25
    }
});

export default Options;
