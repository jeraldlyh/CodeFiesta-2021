import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";
import Layout from "../../components/Layout";
import { getUserProfile } from "../../database/actions/User";
import moment from "moment";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading";
import { Icon } from "react-native-elements";

function ProfileScreen() {
    const { username } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getUserProfile(username).then(response => {
            setProfile(response);
        });
    }, []);

    const formatJoinedDate = (date) => {
        return moment(date).fromNow();
    };

    return (
        <Layout settingsButton={true}>
            {
                profile ?
                <>
                    <View style={tailwind("mb-4 -mt-5 ml-8 self-start")}>
                        <Text style={[styles.header, tailwind("text-3xl")]}>Profile</Text>
                    </View>
                    <ScrollView style={tailwind("w-full")} showsVerticalScrollIndicator={false}>
                        <View style={tailwind("flex flex-col items-center justify-center")}>
                            
                            <Image source={{uri: profile.avatar}}
                                style={[styles.image, tailwind("mt-6")]} />

                            <Text style={[tailwind("mt-4"), styles.header]}>{username}</Text>

                            <View style={[tailwind("mt-1"), { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }]}>
                                <Image source={require("../../assets/profile/TimeCircle.png")}
                                    style={[styles.icons]} />

                                <Text style={[tailwind("ml-2"), styles.subText]}>
                                    Joined {formatJoinedDate(profile.registeredAt)}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                {/* <Image source={require("../../assets/profile/Game.png")}
                                    style={[styles.icons]} /> */}

                                <Icon
                                    name="game-controller-outline"
                                    type="ionicon"
                                    color="#a1a1a1" 
                                />

                                <Text style={[tailwind("ml-2 mr-1"), styles.subText]}>{profile.questCompleted} quests completed | {profile.points}</Text>
                                <Image source={require("../../assets/profile/merlion.png")}
                                    style={[tailwind("-mt-2"), styles.currency]} />
                            </View>

                            <View style={tailwind("mt-5")}>
                                <TouchableOpacity style={[styles.button, tailwind("items-center")]}>
                                    <Image source={require("../../assets/profile/EditUser.png")}
                                        style={[styles.icons, tailwind("mr-3")]} />
                                    <Text style={styles.buttonText}>Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[tailwind("ml-6 mr-6"), { width: 350 }]}>
                            <Text style={[tailwind("mt-7"), styles.subHeader]}>Bio</Text>
                            <View style={styles.container}>
                                <Text style={[tailwind("ml-2"), styles.normalText]}>
                                    {profile.bio}
                                </Text>
                            </View>
                        </View>

                        <View style={[tailwind("mt-7 mr-6 mb-8 ml-6"), { width: 350 }]}>
                            <Text style={[styles.subHeader]}>Interests</Text>
                            <View style={styles.container}>
                                <View style={tailwind("flex flex-row flex-wrap")}>
                                    {
                                        profile.interests.length !== 0
                                            ? profile.interests.map((interest, key) => {
                                                return (
                                                    <View key={key} style={styles.interestsContainer}>
                                                        <Text style={styles.normalText}>{interest}</Text>
                                                    </View>
                                                )
                                            })
                                            : <Text style={styles.normalText}>You currently do not have any interests!</Text>
                                    }
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </>
                : <Loading />
            }
        </Layout>
    );
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

    normalText: {
        fontSize: 14,
        fontFamily: "Poppins-Normal",
        color: "black",
    },

    image: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
    },

    icons: {
        width: 15,
        height: 16,
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
        shadowOffset: { width: 1, height: 7 },
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