import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import QuestCard from "./components/QuestCard";
import Layout from '../../components/Layout';
import tailwind from "tailwind-rn";

function QuestsScreen(props) {
    return (
        <Layout>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.headerText}>Your quests (2)</Text>
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
                <View style={tailwind("h-28")} />
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 40,
        paddingTop:70,
    },
    headerText: {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        marginTop: 10,
    },
});

export default QuestsScreen;
