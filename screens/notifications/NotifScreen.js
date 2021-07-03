import React from 'react';
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements";

function SettingsScreen() {
    return (
        <View style={tailwind("flex items-center justify-center w-full")}>
            <Text style={[styles.header, tailwind("self-start ml-8 mt-24 mb-6 text-3xl")]}>Notifications</Text>
            <TouchableOpacity style={[styles.friendRequest, tailwind("h-16 w-5/6 flex flex-row items-center justify-between")]}>
                <View style={tailwind("flex flex-row items-center")}>
                    <Image source={require("../../assets/notifications/users.png")} style={{height: 42, width: 80}} />
                    <Text style={[styles.text, tailwind("text-base ml-4")]}>3 friend requests</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.individualRow, tailwind("mt-5 pl-8 h-20 w-5/6 flex flex-row items-center justify-start")]}>
                <Icon
                    name="game-controller-outline"
                    type="ionicon"
                    color="#aeaebf"
                />
                <View style={tailwind("ml-6")}>
                    <Text style={[styles.text, tailwind("text-base")]}>New Quest: Chinatown</Text>
                    <Text style={tailwind("text-sm text-gray-400 font-normal")}>11 hours ago</Text>
                </View>
            </TouchableOpacity>

            <Text style={tailwind("mt-20")}>I continue the rest later hehe</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    subHeader: {
        fontFamily: "Poppins-SemiBold",
        marginBottom: 10,
        marginTop: 10,
        color: '#9999AA'
    },
    container: {
        width: "80%"
    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    friendRequest: {
        borderRadius: 14,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    individualRow: {
        borderRadius: 14,
        backgroundColor: 'white',
        paddingHorizontal: 20
    }
});

export default SettingsScreen;