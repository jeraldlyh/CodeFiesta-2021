import React from "react";
import { View, StyleSheet } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";

const icons = [
    require("../assets/loading/mbs.png"),
    require("../assets/loading/merlion.png"),
]

function Loading() {
    return (
        <View style={styles.container}>
            <BouncingPreloader
                icons={icons}
                leftDistance={-100}
                rightDistance={-150}
                speed={1000}
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