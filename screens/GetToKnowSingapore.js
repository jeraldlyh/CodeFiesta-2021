import React from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar, Card, Paragraph } from "react-native-paper";
import tailwind from "tailwind-rn";
import CustomCard from "../components/CustomCard";

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style = {styles.container} >
            <Searchbar
                style={tailwind("mx-8")}
                inputStyle={styles.searchBar}
                placeholder="Search"/>
            <ScrollView contentContainerStyle={tailwind("flex flex-col px-3 items-center justify-center")}>

                <View style={tailwind("mt-8")}>
                    <Text style={[styles.header, tailwind("text-2xl text-left m-5")]}>
                        What do you want to know about the Singapore culture?
                    </Text>
                </View>

                <View style={tailwind("flex flex-row mt-3")}>
                    <CustomCard
                        onPress={() => navigation.push("Tips")}
                        source={require("../assets/singapore/road.jpeg")}
                        title="Useful tips before coming into Singapore"
                        description="These are some information you will need when migrating to SG!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/singapore/singlish.jpeg")}
                        title="Learning Singlish"
                        description="Singaporeans have a unique style of speaking. Click here to find out more!"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../assets/singapore/localFood.jpg")}
                        title="Local food"
                        description="Food is a huge part of our culture. Here are some local dishes you need to try in Singapore!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/singapore/gbtb.jpeg")}
                        title="Local Tourism"
                        description="Want to explore Singapore more? Here are some local attractions you can visit."
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../assets/singapore/ethnic.jpeg")}
                        title="Ethnic composition"
                        description="Singapore is a multi cultural society. Click here to find out more more!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/singapore/smoking.jpeg")}
                        title="Do’s and Don’ts"
                        description="Click here to find out some Singaporean etiquette you should take"
                    />
                </View>
                <View style={tailwind("h-20")} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        fontFamily: "Poppins-Normal"
    },
    header: {
        fontFamily: "Poppins-Bold"
    }
})

export default HomeScreen;