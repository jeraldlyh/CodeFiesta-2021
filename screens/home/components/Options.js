import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

function Options(props) {
    const navigation = useNavigation();

    const onPressed = () => {
        const name = props.name;

        if (name === "Apply") {
            navigation.push("Document");
        } else if (name === "Trivia") {
            navigation.push("Trivia");
        } else if (name === "News") {
            navigation.push("News");
        } else if (name === "Community") {
            navigation.push("Community");
        };
    };

    return (
        <TouchableOpacity
            style={[styles.container, tailwind("items-center justify-center")]}
            onPress={onPressed}
        >   
            { props.name === "Apply" ? <Image source={require("../../../assets/icons/apply.png")} style={styles.image} /> : null }
            { props.name === "Trivia" ? <Image source={require("../../../assets/icons/trivia.png")} style={styles.image} /> : null }
            { props.name === "News" ? <Image source={require("../../../assets/icons/news.png")} style={styles.image} /> : null }
            { props.name === "Community" ? <Image source={require("../../../assets/icons/community.png")} style={styles.community} /> : null }

            <Text style={[tailwind("mt-1 font-semibold"), styles.text]}>{props.name}</Text>
        </TouchableOpacity>
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
