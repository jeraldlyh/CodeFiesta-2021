import React, { useEffect, useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from "react-native-maps";
import Loading from "../../components/Loading";
import Layout from '../../components/Layout';
import { getCurrentLocationDB, goOffline, goOnline, updateLocation } from "../../database/actions/Community";
import { AuthContext } from "../../provider/AuthProvider";
import OnlineButton from "./components/OnlineButton";
import QuestButton from "./components/QuestButton";
import firebase from "../../database/firebaseDB";
import _ from "lodash";
import { Icon } from "react-native-elements";
import { getUserProfile } from "../../database/actions/User";
import Currency from "../../components/Currency";
import { createConvo } from "../../database/actions/Message";
import { useNavigation } from '@react-navigation/native'

function CommunityScreen(props) {
    const [online, setOnline] = useState(false);
    const { username } = useContext(AuthContext);
    const [avatar, setAvatar] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [onlinePlayers, setOnlinePlayers] = useState([]);
    const [onlineMarkers, setOnlineMarkers] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        updateLocation(username).then(() => {
            getCurrentLocationDB(username).then(response => {
                setLocation(response);
                setIsLoading(false);
            });
        });

        const unsubscribe = firebase.firestore().collection("Community")
            .doc("Community")
            .onSnapshot(doc => {
                setOnlinePlayers(doc.data().players);
            });

        return () => {
            goOffline(username);        // Go offline when unmount
            unsubscribe();              // Unsubscribe from firebase listener
        }
    }, []);

    useEffect(() => {
        populateMarkers();
    }, [onlinePlayers])

    const toggleOnline = () => {
        if (online) {
            goOffline(username);
            setOnline(false);
        } else {
            goOnline(username);
            setOnline(true);
        }
    };

    const formatBio = (text) => {
        return text.length > 15 ? text.substr(0, 15) + "..." : text;
    };

    const openChat = (anotherUser, anotherUserAvatar) => {
        if (username !== anotherUser) {
            createConvo(username, anotherUser).then(response => {
                navigation.push("Chat", {
                    thread: response,
                    username: username,
                    avatar: avatar,
                    anotherUser: anotherUser,
                    anotherUserAvatar: anotherUserAvatar
                });
            });
        };
    };

    const populateMarkers = async () => {
        const markers = [];

        for (const index in onlinePlayers) {
            const profile = await getUserProfile(onlinePlayers[index]);
            if (onlinePlayers[index] === username) {
                setAvatar(profile.avatar);
            };

            markers.push(
                <Marker
                    key={index}
                    coordinate={{ longitude: profile.location.longitude, latitude: profile.location.latitude }}
                >
                    <Image source={{ uri: profile.avatar }} style={tailwind("w-14 h-14 rounded-full")} />
                    <Callout style={tailwind("flex bg-white w-36 h-32")}
                        onPress={() => openChat(profile.username, profile.avatar)}
                    >
                        <View style={tailwind("flex flex-col p-2 items-center justify-center")}>
                            <Text style={[styles.header]}>{profile.username}</Text>
                            <Text style={styles.text}>{formatBio(profile.bio)}</Text>
                            {/* Points */}
                            <View style={tailwind("flex flex-row items-center justify-center")}>
                                <Text style={styles.header}>Points: </Text>
                                <Text style={styles.text}>{profile.points} </Text>
                                <Currency height={14} width={14} />
                            </View>
                            <View style={tailwind("flex flex-row items-center justify-center")}>
                                <Text style={styles.header}>Quests: </Text>
                                <Text styles={styles.text}>{profile.questCompleted}</Text>
                            </View>
                            <View style={tailwind("flex flex-row justify-between w-full mt-2")}>
                                <TouchableOpacity style={[styles.button, tailwind("p-1 border-2")]} onPress={() => console.log("Adding friend")}>
                                    <Icon name="person-add-outline" type="ionicon" />
                                </TouchableOpacity>

                                <View style={tailwind("ml-2 mr-2")} />

                                <TouchableOpacity style={[styles.button, tailwind("p-1 border-2 border-black")]}>
                                    <Icon name="chatbox-ellipses-outline" type="ionicon" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Callout>
                </Marker>
            );
        };
        setOnlineMarkers(markers);
    };

    return (
        isLoading
            ? <Loading />
            : <Layout>
                <View style={tailwind("ml-10 mt-20 items-center justify-between flex flex-row w-full pl-1 pr-10")}>
                    <Text style={[styles.header, tailwind("ml-2 text-3xl flex flex-row font-bold text-left")]}>
                        Community
                    </Text>
                    <View style={tailwind("flex flex-row ml-10")}>
                        <OnlineButton online={online} onPress={toggleOnline} />
                        <QuestButton />
                    </View>
                </View>
                <Searchbar
                    style={tailwind("self-center h-11 w-11/12 mx-3 mt-5 mb-3 rounded-xl opacity-80")}
                    inputStyle={styles.searchBar}
                    placeholder="Search"
                />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {
                        onlineMarkers.length !== 0
                            ? onlineMarkers
                            : null
                    }
                    {
                        props.route.params && (
                            <Marker coordinate={{ longitude: props.route.params.longitude, latitude: props.route.params.latitude }}>
                                <Image source={{ uri: props.route.params.image }} style={tailwind("w-14 h-14 rounded-full")} />
                            </Marker>)
                    }


                </MapView>
            </Layout>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FE904B"
    },
    searchBar: {
        fontFamily: "Poppins-Normal",
    },
    text: {
        fontFamily: "Poppins-Normal",
    },
    header: {
        fontFamily: "Poppins-Bold",
    },
    map: {
        marginTop: 15,
        alignSelf: "center",
        height: '65%',
        width: 350,
        borderRadius: 14,
    },
});

export default CommunityScreen;
