import React from "react";
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

function DocumentScreen({ navigation }) {
    return (
        <Layout>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tailwind("pb-10 flex flex-col items-center self-start")}>
                <View style={tailwind("mt-4 flex flex-row self-start mt-16 ml-5")}>
                    <Text style={[tailwind("text-3xl text-left mb-1 py-4 -ml-3"), styles.header]}>Applications</Text>
                </View>

                <View style={tailwind("flex flex-row mt-3")}>
                    <CustomCard
                        onPress={() => navigation.navigate("Start")}
                        source={require("../../assets/document/1.jpg")}
                        title="Apply for work permit"
                        description="Find out which work permits you are eligible for and start applying today"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/document/2.jpeg")}
                        title="Apply for financial assistance"
                        description="Check your eligiblity for available financial aid schemes"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-4")}>
                    <CustomCard
                        source={require("../../assets/document/3.jpeg")}
                        title="Apply for healthcare subsidies"
                        description="Discover which healthcare subsidies you are eligible for"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/document/4.jpeg")}
                        title="Apply for Singapore citizenship"
                        description="Wish to become a Singapore citizen? Check your eligiblity and apply today"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-4")}>
                    <CustomCard
                        source={require("../../assets/document/5.png")}
                        title="Apply for direct school admission (DSA)"
                        description="Explore the different education pathways for your child"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/document/6.jpeg")}
                        title="Apply to a special education school"
                        description="Explore the different education pathways for your child"
                    />
                </View>
            </ScrollView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
})

export default DocumentScreen;