import React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import QuestsScreen from "./QuestsScreen";
import QuestCard from "./components/QuestCard";
import BottomDrawer from "rn-bottom-drawer";
import { useNavigation } from "@react-navigation/native";
import Layout from '../../components/Layout';


function CommunityScreen() {
    const navigation = useNavigation();

    return (
        <Layout>
            <View
                style={tailwind("mt-20 items-center flex flex-row justify-between")}
            >
                <Text style={[styles.header, tailwind("text-3xl text-left mr-16")]}>
                    My Community
                </Text>
                <TouchableOpacity
                    style={[tailwind("-mr-2"), styles.questButton]}
                    onPress={() => {
                        navigation.navigate("Quests");
                    }}
                >
                    <Icon
                        name="document-text-outline"
                        type="ionicon"
                        color="#F7F7F7"
                    />
                    <Text
                        style={{
                            fontSize: 8,
                            fontFamily: "Poppins-Bold",
                            color: "#F7F7F7",
                        }}
                    >
                        Quests
                    </Text>
                </TouchableOpacity>
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
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            />
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
    questButton: {
        flexDirection: "column",
        height: 47,
        width: 51,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE904B",
        right: 10,
        borderRadius: 14,
        fontSize: 20,
    },
    map: {
        marginTop: 15,
        alignSelf: "center",
        height: 520,
        width: 350,
        borderRadius: 14,
    },
});

export default CommunityScreen;
