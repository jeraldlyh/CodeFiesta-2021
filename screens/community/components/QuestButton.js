import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";

function QuestButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[tailwind("w-1/5"), styles.button]}
            onPress={() => {
                navigation.navigate("Quests");
            }}
        >
            <Icon
                name="game-controller-outline"
                type="ionicon"
                color="#F7F7F7"
            />
            <Text style={styles.questText}>
                Quests
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    questText: {
        fontSize: 8,
        fontFamily: "Poppins-Bold",
        color: "#F7F7F7",
    },
    button: {
        flexDirection: "column",
        height: 47,
        width: 51,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE904B",
        borderRadius: 14,
        fontSize: 20,
    },
});

export default QuestButton;