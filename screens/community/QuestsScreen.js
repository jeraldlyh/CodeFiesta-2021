import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import QuestCard from "./components/QuestCard";
import Layout from '../../components/Layout';
import tailwind from "tailwind-rn";
import { getAvailableQuests } from "../../database/actions/Community";

function QuestsScreen() {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        getAvailableQuests().then(response => setQuests(response))
    }, []);

    return (
        <Layout>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.headerText}>Your quests ({quests.length})</Text>
                {
                    quests
                        ? quests.map((quest, index) => {
                            return (
                                <QuestCard
                                    key={index}
                                    title={quest.title}
                                    description={quest.description}
                                    time={quest.createdAt}
                                    color={quest.color}
                                    points={quest.points}
                                    image={quest.image}
                                />
                            )
                        })
                        : null
                }
                <View style={tailwind("h-28")} />
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 40,
        paddingTop: 70,
    },
    headerText: {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        marginTop: 10,
    },
});

export default QuestsScreen;
