import React from "react";
import Loading from "react-native-dynamic-text-loading";
import { LogBox, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";


function LoadingText() {
    LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"]);
    return (
        <Loading
            list={[
                "Assets are loading...",
                "Data is fetching...",
                "Loading..."
            ]}
            spinnerStyle={tailwind("mt-14")}
            backgroundColor="rgba(0, 0, 0, 0)"
            spinnerIsVisible={false}
            textStyle={styles.text}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        marginTop: 375,
        color: "#9999AA",
        fontWeight: "800",
        width: 260,
        textAlign: "center",
        alignSelf: "baseline",
    }
});

export default LoadingText;