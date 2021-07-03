import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import Title from "../../components/Title";
import Options from "./components/Options";
import tailwind from "tailwind-rn";
import { ScrollView } from "react-native-gesture-handler";
import ApplicationStatus from "./components/ApplicationStatus";
import News from "./components/News";
import Quests from "./components/Quests";
import { getAvailableQuests } from "../../database/actions/Community";

function HomeScreenUpdated(props) {
    const [quests, setQuests] = useState([]);
    
    useEffect(() => {
        getAvailableQuests().then(response => setQuests(response))
    }, []);
    return (
        <ScrollView contentContainerStyle={[tailwind("items-center w-full"),{backgroundColor:'#FCFCFC'}]}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/home/headerImage.png")}
                    style={styles.headerImage}
                />
                <Title fontSize={24} style={styles.headerTitle} />
            </View>

            <View style={[styles.guidingNav, tailwind("-mt-16")]}>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
                    What do you need?
                </Text>
                <View style={styles.navOptions}>
                    <Options name = "Apply"/>
                    <Options name = "Trivia"/>
                </View>
                <View style={styles.navOptions}>
                    <Options name = "News"/>
                    <Options name = "Community"/>
                </View>
                <View style={[styles.applicationStatus, tailwind("mt-12")]}>
                    <View style={[styles.applicationHeader, tailwind("items-center flex")]}>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Application status
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <ApplicationStatus
                            name="EntrePass"
                            status="Pending"
                            date="29/06/2021"
                        />
                        <ApplicationStatus
                            name="S Pass"
                            status="Approved"
                            date="28/06/2021"
                        />
                    </ScrollView>
                </View>
                <View style={styles.applicationStatus}>
                    <View style={styles.applicationHeader}>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Today's reads
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView style = {{height:200}} >
                        <News header = {"13 new community COVID-19 cases in Singapore, including 6 unlinked; 4 imported cases"} time = {2} image = {"covid"}/>
                        <News header = {"New medical centres for migrant workers will provide medical, well-being support"} time = {18} image = {"migrantWorkers"}/>
                        <News header = {"New Covid-19 clusters in Henderson Crescent, CGH; 3 unlinked cases"} time = {18} image = {"cgh"}/>
                    </ScrollView>
                </View>
                <View style={styles.applicationStatus}>
                    <View style={styles.applicationHeader}>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Daily quests
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {
                            quests
                            ? quests.map((quest, index) => {
                                return (
                                    <Quests
                                        key={index}
                                        action = {quest.action}
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
                        {/* <Quests/>
                        <Quests/>
                        <Quests/> */}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: "100%",
        height: 140,
    },
    headerContainer: {
        width: "100%",
        height: 200,
    },
    headerTitle: {
        position: "absolute",
        left: 25,
        bottom: 70,
    },
    guidingNav: {
        width: "100%",
        padding: 35,
    },
    navOptions: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    applicationStatus: {
        width: "100%",
        marginTop: 30,
    },
    applicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13,
    },
});

export default HomeScreenUpdated;
