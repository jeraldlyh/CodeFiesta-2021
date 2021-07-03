import React, { useEffect, useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import Loading from "../../components/Loading";
import Layout from '../../components/Layout';
import { getCurrentLocationDB, goOffline, goOnline, updateLocation } from "../../database/actions/Community";
import { AuthContext } from "../../provider/AuthProvider";
import OnlineButton from "./components/OnlineButton";
import QuestButton from "./components/QuestButton";
import firebase from "../../database/firebaseDB";
import _ from "lodash";

function CommunityScreen() {
    const [online, setOnline] = useState(false);
    const { username } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [players, setPlayers] = useState([]);
    const DELTA = {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    useEffect(() => {
        console.log(players)
    }, [players]);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("Community")
            .onSnapshot(collection => {
                collection.forEach(doc => {
                    const onlinePlayers = [];
                    doc.data().players.forEach(player => {
                        getCurrentLocationDB(player).then(response => {
                            onlinePlayers.push({
                                coordinates: response,
                                player: player
                            });
                        });
                    })
                    setPlayers(onlinePlayers);
                })
            })

        updateLocation(username).then(() => {
            getCurrentLocationDB(username).then(response => {
                setLocation(response);
                setIsLoading(false);
            });
        });

        return () => {
            goOffline(username);        // Go offline when unmount
            unsubscribe();              // Unsubscribe from firebase listener
        }
    }, []);

    const toggleOnline = () => {
        if (online) {
            goOffline(username);
        } else {
            goOnline(username);
        }
        setOnline(!online);
    };

    return (
        isLoading
            ? <Loading />
            : <Layout>
                <View style={tailwind("mt-20 items-center flex flex-row w-full pl-1 pr-2")}>
                    <Text style={[styles.header, tailwind("text-3xl text-left")]}>
                        My Community
                    </Text>
                    <QuestButton />
                    <OnlineButton online={online} onPress={toggleOnline} />
                </View>
                <Searchbar
                    style={tailwind("self-center h-11 w-5/6 mx-3 mt-5 mb-3 rounded-xl opacity-80")}
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
                // showsUserLocation={true}
                >
                    {
                        players.length !== 0
                            ? players.map((player, index) => {
                                
                                console.log(player);
                              
                                return(<Marker key={index} coordinate={{longitude:player.coordinates.longitude,latitude:player.coordinates.latitude }}>
                                    <Callout style={tailwind("h-14 w-14 bg-black")}>
                                        <View>
                                            <Text>This is a plain view</Text>
                                        </View>
                                    </Callout>
                                </Marker>);
                                
                            })
                            : null
                    }
                     {/* <Marker coordinate={{ latitude: 1.2953686997982004, longitude:103.85045293243007}} />
                     <Marker coordinate={{ latitude: 1.553686997982004, longitude:103.85045293243007}} /> */}
                </MapView>
            </Layout>
    );
}

const styles = StyleSheet.create({
    searchBar: {
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
