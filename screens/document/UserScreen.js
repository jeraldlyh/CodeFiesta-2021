import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { Icon } from 'react-native-elements';

function UserScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const isActive = (index) => {
        return activeIndex === index;
    };

    return (
        <Layout>
            {
                activeIndex === 0 
                ? null
                :
                <View style={tailwind("self-end top-1 mr-6 z-10")}>
                    <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-70 items-center flex justify-center")}
                        onPress={() => navigation.push("Visa")}
                    >
                        <Icon
                            name='arrow-forward-outline'
                            type='ionicon'
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
            }
            <View style={tailwind("flex flex-col w-full h-full p-3 mt-9 items-center")}>
                <Text style={[styles.title, tailwind("text-3xl p-3 text-left self-start mt-24")]}>I'm...</Text>

                <View>
                    <Image style={styles.image} source={require('../../assets/work_permit/work.png')} />
                </View>

                <View style={tailwind("mt-8")} />

                <Button onPress={() => setActiveIndex(1)} height={14} width={72} text="moving for work" backgroundColor={isActive(1) ? "#FE904B" : "#e3e3e3"} textColor={isActive(1) ? "#FFF" : "#000"} />

                <View style={tailwind("mt-6")} />
                <Button onPress={() => setActiveIndex(2)} height={14} width={72} height="20" text="moving to school / reunite with my family" backgroundColor={isActive(2) ? "#FE904B" : "#e3e3e3"} textColor={isActive(2) ? "#FFF" : "#000"} />

                <View style={tailwind("mt-6")} />
                <Button onPress={() => setActiveIndex(3)} height={14} width={72} height="20" text="hoping to become a permanent resident (PR)" backgroundColor={isActive(3) ? "#FE904B" : "#e3e3e3"} textColor={isActive(3) ? "#FFF" : "#000"} />
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

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        textAlign: "center"
    },

    button: {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 22,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 15 },
        backgroundColor: '#FE904B',
        width: 100
    },

    image: {
        height: 120,
        width: 220,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default UserScreen;