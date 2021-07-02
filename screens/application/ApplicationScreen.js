import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar } from "react-native-paper";
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";
import Layout from '../../components/Layout';

function ApplicationScreen({ navigation }) {
    return (
        <Layout>
            <View style={tailwind("h-10")} />
                <View style={tailwind("mt-4 flex flex-row self-start ml-5")}>
                    <Text style={[styles.header, tailwind("text-3xl text-left mt-4 px-2 py-3")]}>Applications</Text>
                </View>
                <Searchbar
                    style={tailwind("self-center h-11 w-5/6 mt-2 mx-3 mb-3 rounded-xl opacity-80")}
                    inputStyle={styles.searchBar}
                    placeholder="Search"
                />
                <ScrollView contentContainerStyle={tailwind("mt-1 flex flex-col px-3 items-center justify-center")}>

                <View style={tailwind("flex flex-row mt-3")}>
                    <CustomCard
                        onPress={() => navigation.navigate("Work Permit")}
                        source={require("../../assets/home/workPermit.jpg")}
                        title="Apply for work permit"
                        description="Find out which work permit you are eligible for and start applying"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/application/financial.jpeg")}
                        title="Apply for financial assistance"
                        description="Check your eligiblity for financial aid schemes"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../../assets/application/hospital.jpeg")}
                        title="Apply for healthcare subsidies"
                        description="Find out which subsidies
                        you are eligible for"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/application/passport.jpeg")}
                        title="Apply for Singapore citizenship"
                        description="Check your eligiblity and start applying"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../../assets/application/dsa.png")}
                        title="Apply for direct school admission (DSA)"
                        description="Explore the different education pathways for your child"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../../assets/application/people.jpeg")}
                        title="Apply to a special education school"
                        description="Explore the different education pathways for your child"
                    />
                </View>
                <View style={tailwind("h-20")} />
            </ScrollView>
        </Layout>
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

export default ApplicationScreen;