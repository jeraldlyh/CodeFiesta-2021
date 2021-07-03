import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../../components/Button";

function SuccessScreen({ navigation }) {
    return (
        <View contentContainerStyle={[tailwind("items-center w-full pb-14")]}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require("../../assets/visa/entre.jpg")}
                        style={styles.headerImage}
                    />

                    <View style={global.container}>
                        <View style={styles.bodyContainer}></View>
                    </View>
                </View>

                <View style={tailwind("flex flex-col ml-10 mt-3")}>
                    <Text style={[styles.title, tailwind("text-2xl text-left")]}>Success!</Text>
                    <Text style={[styles.content, tailwind("text-base text-gray-500 mt-3 pr-10 mb-6")]}>You have successfuly applied for EntrePass. Do check your email or Application status section in 3-5 working days for any updates.</Text>
                </View>
                <View style={tailwind("flex flex-col w-full h-full -mt-4 items-center")}>
                    <Image style={[styles.image, tailwind("mb-5")]} source={require("../../assets/work_permit/work2.png")} />
                    <Button onPress={() => navigation.popToTop()} text="Back to applications" height={14} width={72} backgroundColor="#FE904B" textColor="#FFF" />
                </View>
            </View>

    )
};

const styles = StyleSheet.create({
    content: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    },
    searchBar: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    },
    image: {
        height: 350,
        width: 300,
    },
    headerImage: {
        width: "100%",
        height: 200,
    },

    headerContainer: {
        width: "100%",
        height: 200,
    },
    bodyContainer: {
        width: "100%",
        height: 1000,
        borderRadius: 30,
        backgroundColor: "#FCFCFC",
        position: "absolute",
        top: -30,
        zIndex: 99,
        elevation: 5,
    },
})

export default SuccessScreen;