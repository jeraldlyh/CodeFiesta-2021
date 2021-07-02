import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import tailwind from "tailwind-rn";

function Options(props) {
    return (
        <View
            style={[styles.container, tailwind("items-center justify-center")]}
        >   
            { props.name === "Apply" ? <Image source={require("../../../assets/icons/apply.png")} style={styles.image} /> : null }
            { props.name === "Trivia" ? <Image source={require("../../../assets/icons/trivia.png")} style={styles.image} /> : null }
            { props.name === "News" ? <Image source={require("../../../assets/icons/news.png")} style={styles.image} /> : null }
            { props.name === "Community" ? <Image source={require("../../../assets/icons/community.png")} style={styles.community} /> : null }

            <Text style={[tailwind("mt-1"), styles.text]}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 80,
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    image: {
        height: 25,
        width: 25,
    },
    community: {
        height: 22,
        width: 29,
    },
    text: {
        color: '#2b2b2b',
        fontFamily:'Poppins-SemiBold'
    }
});

export default Options;
