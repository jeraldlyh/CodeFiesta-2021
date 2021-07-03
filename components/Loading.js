import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";
import tailwind from "tailwind-rn";

const icons = [
    require("../assets/loading/merli.png"),
    require("../assets/loading/blood.png"),
]

function Loading() {
    return (
        <View style={tailwind("flex flex-col items-center")}>
            <View style={styles.container}>
                <BouncingPreloader
                    icons={icons}
                    leftDistance={-50}
                    rightDistance={-170}
                    speed={1100}
                />
            </View>
            <Text style={[tailwind("mt-10 text-lg font-semibold"), styles.text]}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 350
    },
    text: {
        color: '#bfbfcf',
    },
});

export default Loading;