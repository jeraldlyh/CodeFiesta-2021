import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";
import tailwind from "tailwind-rn";
import LoadingText from "./LoadingText";

const icons = [
    require("../assets/loading/merli.png"),
    require("../assets/loading/blood.png"),
]

function Loading() {
    return (
        <Fragment>
            <View style={styles.container}>
                <BouncingPreloader
                    icons={icons}
                    leftDistance={-50}
                    rightDistance={-170}
                    speed={1100}
                />
            </View>
            <LoadingText />
        </Fragment>
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