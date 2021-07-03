import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";
import News from "../home/components/News";
import Tab from "./components/Tab";
import { Icon } from "react-native-elements";

function NewsHomeScreen(props) {
    const navigation = useNavigation();
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const setOthersInactive = (number) =>{
        for (let i = 1; i <= 6; i++){
            if (i!=number){
                switch (i) {
                    case 1:
                        setActive1(false);
                        break;
                    case 2:
                        setActive2(false);
                        break;
                    case 3:
                        setActive3(false);
                        break;
                    case 4:
                        setActive4(false);
                        break;
                    case 5:
                        setActive5(false);
                        break;
                    case 6:
                        setActive6(false);
                        break;
                }
            }
        }
    }
    const navigateTab = (number) => {
        
        switch (number) {
            case 1:
                setActive1(true);
                break;
            case 2:
                setActive2(true);
                break;
            case 3:
                setActive3(true);
                break;
            case 4:
                setActive4(true);
                break;
            case 5:
                setActive5(true);
                break;
            case 6:
                setActive6(true);
                break;
        }
        setOthersInactive(number)
    };

    return (
        <>
            <View style={tailwind("self-start top-10 ml-6 z-10")}>
                <TouchableOpacity
                    style={tailwind(
                        "bg-gray-300 mt-1 w-14 h-14 rounded-full absolute opacity-50 items-center flex justify-center"
                    )}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={tailwind("flex items-center pb-5")}
            >
                <View style={styles.headerContainer}>
                    <Image
                        source={require("../../assets/news/headerImage.png")}
                        style={styles.headerImage}
                    />
                    <View style={styles.headerTitle}>
                        <Text
                            style={tailwind(
                                "text-white font-extrabold text-xl pr-24"
                            )}
                        >
                            Mandatory Covid-19 test for Tiong Bahru residents
                            after 13 cases found in 3 households
                        </Text>
                    </View>
                    <View style={styles.details} />
                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            fontSize: 14,
                            color: "white",
                            bottom: 46,
                            left: 47,
                        }}
                    >
                        12 minutes ago
                    </Text>
                    <View
                        style={[
                            tailwind("flex flex-row items-center"),
                            styles.readNow,
                        ]}
                    >
                        <Text style={tailwind("font-semibold text-white")}>
                            Read now
                        </Text>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={20}
                            color="white"
                        />
                    </View>
                </View>

                <View style={tailwind("mt-5 flex flex-row self-start ml-5")}>
                    <Text
                        style={[
                            styles.header,
                            tailwind("text-3xl text-left mb-1 p-4"),
                        ]}
                    >
                        News
                    </Text>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    styles={tailwind("w-5/6 flex flex-row justify-between")}
                >
                    <Tab text="Health" onPress={()=>navigateTab(1)} active={active1} />
                    <Tab text="Transport" onPress={()=>navigateTab(2)}  active={active2} />
                    <Tab text="Education" onPress={()=>navigateTab(3)} active={active3} />
                    <Tab text="Politics" onPress={()=>navigateTab(4)} active={active4} />
                    <Tab text="Environment" onPress={()=>navigateTab(5)} active={active5} />
                    <Tab text="Technology" onPress={()=>navigateTab(6)} active={active6} />
                </ScrollView>

                <Searchbar
                    style={tailwind(
                        "h-11 w-5/6 mx-3 mt-6 mb-3 rounded-xl opacity-80"
                    )}
                    inputStyle={styles.searchBar}
                    placeholder="Search"
                />

                <ScrollView style={tailwind("w-full px-8 mt-4")}>
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </ScrollView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        borderRadius: 0,
        width: "100%",
        height: 260,
    },
    details: {
        position: "absolute",
        bottom: 10,
        left: 30,
        height: 32,
        width: 135,
        backgroundColor: "#7d7d7d",
        opacity: 0.37,
        borderRadius: 12,
        padding: 10,
    },
    readNow: {
        position: "absolute",
        bottom: 15,
        right: 30,
        color: "white",
    },
    headerContainer: {
        width: "100%",
        height: 250,
    },
    headerTitle: {
        position: "absolute",
        left: 30,
        bottom: 57,
    },
    header: {
        fontFamily: "Poppins-Bold",
    },
    time: {
        width: 73,
        height: 40,
        backgroundColor: "#373737",
        zIndex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    searchBar: {
        fontFamily: "Poppins-Normal",
    },
});

export default NewsHomeScreen;
