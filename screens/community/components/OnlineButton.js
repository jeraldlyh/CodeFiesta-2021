import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tailwind from "tailwind-rn";

function OnlineButton(props) {
    return (
        <TouchableOpacity
            style={[tailwind("w-1/5"), styles.button]}
            onPress={props.onPress}
        >
            <Icon
                name={
                    props.online
                        ? "flash-outline"
                        : "flash-off-outline"
                }
                type="ionicon"
                color="#000"
            />
            <Text style={
                props.online
                    ? styles.onlineText
                    : styles.offlineText}
            >
                {props.online ? "Online" : "Offline"}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    offlineText: {
        fontSize: 8,
        fontFamily: "Poppins-Bold",
        color: "#000",
    },
    onlineText: {
        fontSize: 8,
        fontFamily: "Poppins-Bold",
        color: "#000",
    },
    button: {
        flexDirection: "column",
        height: 47,
        width: 51,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 14,
        fontSize: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 7 },
        marginRight: 8
    },
});

export default OnlineButton;