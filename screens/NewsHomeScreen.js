import React from 'react';
import { View,Text, StyleSheet,ScrollView } from 'react-native';
import tailwind from "tailwind-rn";
import CustomCard from '../components/CustomCard';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


function NewsHomeScreen(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {styles.container}>
        <ScrollView contentContainerStyle={[tailwind("flex items-center mt-20"),{paddingBottom:100}]} >
                <View style={tailwind("mt-5")}>
                    <Text style={[styles.header, tailwind("text-4xl text-left")]}>What local topics are you interested in?</Text>
                </View>
                <View style={tailwind("flex flex-row mt-12")}>
                    <CustomCard
                        onPress={() => navigation.push("CurrentNews")}
                        source={require("../assets/news/COVID-19.jpeg")}
                        title="COVID-19 news"
                        description="Get to know what work permit you are eligible for and start applying now"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/news/Technology.jpeg")}
                        title="Technology"
                        description="Get to know new  technological advancements in SG"
                    />
                </View>
                <View style={tailwind("flex flex-row mt-12")}>
                    <CustomCard
                        onPress={() => navigation.push("Work Permit")}
                        source={require("../assets/news/Transport.jpeg")}
                        title="Transport"
                        description="Click here to get updated on new MRT lines / bus services."
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/news/Politics.jpeg")}
                        title="Politics"
                        description="Interesting in Singapore’s political scene? Click here to find out more"
                    />
                </View>
                <View style={tailwind("flex flex-row mt-12")}>
                    <CustomCard
                        onPress={() => navigation.push("Work Permit")}
                        source={require("../assets/news/Environment.jpeg")}
                        title="Environment"
                        description="Find out about recent environmental efforts in Singapore"
                    />
                    <View style={tailwind("w-3")} />
                    <CustomCard
                        source={require("../assets/news/Education.jpeg")}
                        title="Education"
                        description="Click here to find out about recent news regarding Education."
                    />
                </View>
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        fontFamily: "Poppins-Bold"
    }
})



export default NewsHomeScreen;