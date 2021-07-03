import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Currency from "../../../components/Currency";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";

function QuestCard(props) {
    const getQuestAvailability = () => {
        var currentTime = moment(new Date().getTime());
        var createdAt = moment(props.time);
        var difference = currentTime.diff(createdAt, "hours");
        return 24 - difference >= 0 ? 24 : difference;
    };
    const navigation = useNavigation();



    return (
        <View style={[styles.container, { backgroundColor: `${props.color}` }]}>
            <View style={styles.points}>
                <Text style={{ fontSize: 13, fontFamily: "Poppins-Normal" }}>+{props.points}</Text>
                <Currency height={31} width={28} />
            </View>
            <Image
                style={styles.image}
                source={{ uri: props.image }}
            />
            <View style={styles.textContent}>
                <View style={styles.header}>
                    <Text style={{ fontFamily: "Poppins-Bold", fontSize: 19 }}>
                        {props.title}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            fontSize: 11,
                            color: "#868686",
                        }}
                    >
                        {getQuestAvailability()} hours left
                    </Text>
                </View>
                <Text style={styles.bodyText}>
                    {props.description}
                </Text>
            </View>
            <TouchableOpacity onPress = {()=>navigation.navigate('CommunityHome',{
                latitude: props.latitude,
                image: props.image,
                title: props.title,
                longitude: props.longitude,
            })}
                
            >   
                <View style={tailwind("px-3 py-2 mb-2 rounded-full bg-white opacity-50")}>
                    <Text>Take me there!</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderRadius: 24,
        padding: 10,
        alignItems: "center",
        width: 314,
    },
    points: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 73,
        height: 40,
        borderTopLeftRadius: 24,
        zIndex: 1,
        backgroundColor: "#E8FAFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        height: 179,
        width: 279,
    },
    textContent: {
        width: 279,
    },
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bodyText: {
        fontSize: 11,
        fontFamily: "Poppins-Normal",
        marginBottom: 13
    }
});

export default QuestCard;
