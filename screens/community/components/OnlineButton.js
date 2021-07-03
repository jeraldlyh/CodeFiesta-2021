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
                color={
                    props.online
                        ? "#F7F7F7"
                        : "#000"
                }
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
        color: "#F7F7F7",
    },
    button: {
        flexDirection: "column",
        height: 47,
        width: 51,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE904B",
        borderRadius: 14,
        fontSize: 20,
    },
});

export default OnlineButton;