import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import tailwind from "tailwind-rn";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { Icon } from 'react-native-elements';

function VisaScreen({ navigation }) {
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
                <View style={tailwind("self-end top-1 mr-12 z-10")}>
                    <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-70 items-center flex justify-center")}
                        onPress={() => navigation.push("Visa Type")}
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
                <Text style={[styles.title, tailwind("text-3xl p-3 text-left self-start pt-24")]}>Do you have a work visa?</Text>
                <View>
                    <Image style={styles.image} source={require('../../assets/work_permit/work.png')}/>
                </View>

                <View style={tailwind("mt-8")}/>

                <Button height={14} width={72} onPress={() => setActiveIndex(1)} text="I have a visa" backgroundColor={isActive(1) ? "#FE904B": "#e3e3e3"} textColor={isActive(1) ? "#FFF" : "#000"} />

                <View style={tailwind("mt-6")}/>
                <Button height={14} width={72} onPress={() => setActiveIndex(2)} text="I do not have a visa" backgroundColor={isActive(2) ? "#FE904B": "#e3e3e3"} textColor={isActive(2) ? "#FFF" : "#000"} />

                {/* <View style={{flexDirection:"row"}}>
                    <View style={tailwind("m-14")}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style ={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={tailwind("m-14")}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.push("Visa Type")}>
                            <Text style = {styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
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
    button: {
        borderRadius:25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 22,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 15},
        backgroundColor: '#FE904B',
        width: 100
    },

    image: {
        height: 120,
        width: 220,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        textAlign: "center"
    },
})

export default VisaScreen;