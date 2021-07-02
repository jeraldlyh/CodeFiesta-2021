import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";
import Layout from "../../components/Layout";
import Header from "../../components/Header";


function ProfileScreen({ navigation }) {
    return (
        <Layout>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <Image source={require("../../assets/profile/man.jpg")}
                    style={[styles.image, tailwind("mt-12")]} />

                <Text style={[tailwind("mt-4"), styles.header]}>John doe</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Image source={require("../../assets/profile/TimeCircle.png")}
                        style={[styles.icons]} />

                    <Text style={[tailwind("mt-1 ml-2"), styles.subText]}>
                        Joined 3 days ago
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Image source={require("../../assets/profile/Game.png")}
                        style={[styles.icons]} />

                    <Text style={[tailwind("ml-2 mr-1"), styles.subText]}>3 quests completed | 290</Text>

                    <Image source={require("../../assets/profile/merlion.png")}
                        style={[styles.currency]} />
                </View>

                <View style={tailwind("mt-5")}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require("../../assets/profile/AddUser.png")}
                            style={[styles.icons, tailwind("mr-2")]} />
                        <Text style={styles.buttonText}>Add friend</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[tailwind("ml-6 mr-6")]}>
                <Text style={[tailwind("mt-4"), styles.subHeader]}>Bio</Text>

                <View style={styles.container}>
                    <Text style={[tailwind("ml-2")]}>
                        Hello! I moved to Singapore from Switzerland recently. It has been a
                        dream come true! I would love to meet more people :) Please send me a
                        friend request!
                    </Text>

                </View>
            </View>

            <View style={[tailwind("mt-4 mr-6 ml-6")]}>
                <Text style={[styles.subHeader]}>Interests</Text>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <View style={styles.interestsContainer}>
                            <Text>Sports & Fitness</Text>
                        </View>
                        <View style={styles.interestsContainer}>
                            <Text>Board Games</Text>
                        </View>
                        <View style={styles.interestsContainer}>
                            <Text>Gaming</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <View style={styles.interestsContainer}>
                            <Text>Reading</Text>
                        </View>
                        <View style={styles.interestsContainer}>
                            <Text>Travelling</Text>
                        </View>
                        <View style={styles.interestsContainer}>
                            <Text>Food</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Layout>
    )
};

export default ProfileScreen;

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 28,
        textAlign: "justify",
        fontFamily: "Poppins-Bold"
    },

    subHeader: {
        color: "black",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 15
    },

    subText: {
        color: "grey",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Normal"
    },

    image: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
    },

    icons: {
        width: 15,
        height: 15,
    },

    currency: {
        width: 27,
        height: 27,
        borderRadius: 27 / 2,
    },

    button: {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 22,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 15 },
        backgroundColor: '#FE904B',
        width: 130,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        fontSize: 13,
    },

    container: {
        marginTop: 5,
        backgroundColor: '#e6e6e6',
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
    },

    interestsContainer: {
        margin: 5,
        backgroundColor: '#F2F2F2',
        borderRadius: 25,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 9,
        paddingRight: 9,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        shadowRadius: 15,
    },
});