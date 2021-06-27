import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar } from "react-native-paper";
import tailwind from "tailwind-rn";
import CustomCard from "../components/CustomCard";

function ApplicationScreen({ navigation }) {
    return (
        <SafeAreaView style = {styles.container} >
            <View style={tailwind("h-10")} />
            <Searchbar
                style={tailwind("mx-8")}
                inputStyle={styles.searchBar}
                placeholder="Search"/>
            <ScrollView contentContainerStyle={tailwind("flex flex-col px-3 items-center justify-center")}>

                <View style={tailwind("mt-8")}>
                    <Text style={[styles.header, tailwind("text-2xl self-start  m-5")]}>
                        Applications
                    </Text>
                </View>

                <View style={tailwind("flex flex-row mt-3")}>
                    <CustomCard
                        onPress={() => navigation.navigate("Work Permit")}
                        source={require("../assets/home/workPermit.jpg")}
                        title="Apply for work permit"
                        description="Find out which work permit you are eligible for and start applying"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/application/financial.jpeg")}
                        title="Apply for financial assistance"
                        description="Check your eligiblity for financial aid schemes"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../assets/application/hospital.jpeg")}
                        title="Apply for healthcare subsidies"
                        description="Find out which subsidies
                        you are eligible for"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/application/passport.jpeg")}
                        title="Apply for Singapore citizenship"
                        description="Check your eligiblity and start applying"
                    />
                </View>

                <View style={tailwind("flex flex-row mt-8")}>
                    <CustomCard
                        source={require("../assets/application/dsa.png")}
                        title="Apply for direct school admission (DSA)"
                        description="Explore the different education pathways for your child"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/application/people.jpeg")}
                        title="Apply to a special education school"
                        description="Explore the different education pathways for your child"
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

export default ApplicationScreen;