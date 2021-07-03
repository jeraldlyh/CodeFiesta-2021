import React from 'react';
import tailwind from "tailwind-rn";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements";
import Button from "./components/Button";

function SettingsScreen() {
    return (
        <ScrollView style={tailwind("w-full")} showsVerticalScrollIndicator={false}>
            <View style={tailwind("flex flex-col items-center justify-center")}>
                <Text style={[styles.header, tailwind("self-start ml-8 mt-24 mb-7 text-3xl")]}>Notifications</Text>
                <TouchableOpacity style={[styles.friendRequest, tailwind("h-16 w-5/6 flex flex-row items-center justify-between")]}>
                    <View style={tailwind("flex flex-row items-center")}>
                        <Image source={require("../../assets/notifications/users.png")} style={{height: 42, width: 80}} />
                        <Text style={[styles.text, tailwind("text-base ml-4")]}>3 friend requests</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
                </TouchableOpacity>
            </View>
            <View style={[styles.div, tailwind("bg-white w-5/6 self-center my-5 flex flex-col mb-10")]}>
                <Button type="quest" name="Chinatown" time="11 hours ago"/>
                <Button type="quest" name="Merlion" time="11 hours ago"/>
                <Button type="application" name="S Pass" status="Approved" time="11 hours ago"/>
                <Button type="application" name="Entre Pass" status="Submitted" time="1 day ago"/>
                <Button type="application" name="S Pass" status="Submitted" time="2 days ago"/>
            </View>
        </ScrollView>
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
    div: {
        borderRadius: 14
    }
});

export default SettingsScreen;