import React from "react";
import { View, StyleSheet } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";

const icons = [
    require("../assets/loading/merli.png"),
    require("../assets/loading/blood.png"),
]

function Loading() {
    return (
        <View style={styles.container}>
            <BouncingPreloader
                icons={icons}
                leftDistance={-50}
                rightDistance={-170}
                speed={1100}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default Loading;