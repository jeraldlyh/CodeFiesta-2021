import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import Button from "../../components/Button";
import { getTipsByTag } from '../../database/actions/Tips';
import Layout from '../../components/Layout';
import Header from '../../components/Header';


const MustKnowTips = ({ navigation }) => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        getTipsByTag("Singapore").then(response => {
            setTips(response)
        })
    }, [])

    return (
        <Layout>
            <ScrollView style={tailwind("pb-10")} contentContainerStyle={tailwind("flex flex-col items-center justify-center")}>
                <Header title="10 Useful things you need to know before coming into Singapore" />
                {
                    tips && tips.length !== 0
                        ? tips.map((tip, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.title}>{index + 1}. {tip.title}</Text>
                                    <Image style={[styles.image, tailwind("self-center h-36 w-80")]} source={{ uri: tip.url }} />
                                    <Text style={styles.body}>{tip.body}</Text>
                                </View>
                            )
                        })
                        : null
                }

                <Button onPress={() => navigation.push("Quiz")} text="Take a quiz!" backgroundColor="#FE904B" textColor="#FFF" height="12" />
                <View style={tailwind("h-4")} />

                {/* <Button onPress={() => navigation.goBack()} text="Back" backgroundColor="#FE904B" textColor="#FFF" height="12" />
                <View style={tailwind("h-12")} /> */}
            </ScrollView>
        </Layout>
    )
}


export default MustKnowTips;

function padding(a, b, c, d) {
    return {
        paddingTop: a,
        paddingRight: b ? b : a,
        paddingBottom: c ? c : a,
        paddingLeft: d ? d : (b ? b : a)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    body: {
        ...padding(20, 0, 0, 0),
        color: "black",
        fontSize: 16,
        textAlign: "justify",
        fontFamily: "Poppins-Normal"
    },

    title: {
        ...padding(0, 0, 20, 0),
        color: "black",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        textAlign: "center"
    },
})