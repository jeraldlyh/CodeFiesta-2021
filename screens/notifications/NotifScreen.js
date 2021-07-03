import React from 'react';
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text } from 'react-native';
import Button from "../profile/components/Button";

function SettingsScreen() {
    return (
        <View style={tailwind("flex items-center justify-center w-full")}>
            <Text style={[styles.header, tailwind("self-start ml-8 mt-24 text-3xl")]}>Notifications</Text>
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
        color: '#9999AA',
        fontFamily: 'Poppins-Normal'
    },
    individualRow: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default SettingsScreen;