import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

function StartScreen({ navigation }) {
    return (
        <Layout>
            <View style={tailwind("flex flex-col w-full h-full p-3 items-center")}>
                <Text style={[styles.title, tailwind("text-3xl p-3 pl-5 text-left self-start mt-24 mb-3")]}>Let's apply for your work permit!</Text>
                <Image style={[styles.image, tailwind("mb-7")]} source={require("../../assets/work_permit/work2.png")} />
                <Button onPress={() => navigation.push("User")} text="Start application process" height={14} width={72} backgroundColor="#FE904B" textColor="#FFF" />
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    },
    image: {
        height: 350,
        width: 300,
    }
})

export default StartScreen;