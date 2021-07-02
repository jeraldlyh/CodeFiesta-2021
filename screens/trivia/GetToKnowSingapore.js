import React from "react";
import { View, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

function HomeScreen({ navigation }) {
    return (
        <Layout>
            <ScrollView contentContainerStyle={tailwind("flex flex-col items-center justify-center")}>
                <Header title="What do you want to know about the Singapore culture?" />

                <View style={tailwind("flex flex-row mt-3")}>
                    <CustomCard
                        onPress={() => navigation.navigate("Tips")}
                        source={require("../../assets/singapore/road.jpeg")}
                        title="Useful tips before coming into Singapore"
                        description="These are some information you will need when migrating to SG!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/singapore/singlish.jpeg")}
                        title="Learning Singlish"
                        description="Singaporeans have a unique style of speaking. Click here to find out more!"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-4")}>
                    <CustomCard
                        source={require("../../assets/singapore/localFood.jpg")}
                        title="Local food"
                        description="Food is a huge part of our culture. Here are some local dishes you need to try in Singapore!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/singapore/gbtb.jpeg")}
                        title="Local Tourism"
                        description="Want to explore Singapore more? Here are some local attractions you can visit."
                    />
                </View>

                <View style={tailwind("flex flex-row mt-4")}>
                    <CustomCard
                        source={require("../../assets/singapore/ethnic.jpeg")}
                        title="Ethnic composition"
                        description="Singapore is a multi cultural society. Click here to find out more more!"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/singapore/smoking.jpeg")}
                        title="Do’s and Don’ts"
                        description="Click here to find out some Singaporean etiquette you should take"
                    />
                </View>
                <View style={tailwind("h-20")} />
            </ScrollView>
        </Layout>
    )
};

export default HomeScreen;