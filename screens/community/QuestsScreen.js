import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import QuestCard from "./components/QuestCard";

function QuestsScreen(props) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Your quests ({props.count})</Text>
                <QuestCard
                    name="Chinatown"
                    time="13 hours left"
                    color="#C8F2FE"
                    points="50"
                />

                <QuestCard
                    name="Merlion"
                    time="13 hours left"
                    color="#68C8C6"
                    points="100"
                />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 24,
        padding: 40,
        borderWidth: 1,
    },
    headerText: {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        marginTop: 10,
    },
});

export default QuestsScreen;
