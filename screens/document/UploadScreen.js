import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";

function UploadScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={[tailwind("items-center w-full")]}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/visa/entre.jpg")}
                    style={styles.headerImage}/>

                <View style={global.container}>
                    <View style = {styles.bodyContainer} >
                    </View>
                </View>
            </View>

            <View style = {[tailwind("ml-12 mr-12 mt-16 mb-8")]}>
                <Text style = {styles.header}>Documents required</Text>
                <Text style = {styles.subHeader}>For Entre Pass</Text>

                <Text style = {[styles.subText1, tailwind("mt-3")]}>
                    • Personal particulars page of your passport. {"\n"}
                    • Past employment testimonials in English or resume. {"\n"}
                    • For businesses registered with ACRA, upload company’s latest business profile or instant information from Bizfile. {"\n"}
                    • A business plan in English, maximum 10 pages.
                </Text>
                <Text style = {[styles.subText2]}>
                    • Other documents that will support your EntrePass application
                </Text>
            </View>

            <View style={tailwind("flex items-center")}>
                <View style={tailwind("flex flex-row")}>
                    <View>
                        <TouchableOpacity style={[styles.button, tailwind("flex items-center")]}>
                            <Image source={require("../../assets/work_permit/plus.png")} style={styles.icon}/>
                            
                            <Text style ={styles.buttonText}>Passport Personal Particulars </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind("w-8")} />
                    <View>
                        <TouchableOpacity style={[styles.button, tailwind("flex items-center")]}>
                            <Image source={require("../../assets/work_permit/plus.png")} style={styles.icon}/>

                            <Text style = {styles.buttonText}>Past Employment Testimonials</Text>
                        </TouchableOpacity>
                    </View>
                </View>    

                <View style={tailwind("flex flex-row mt-6")}>
                    <View>
                        <TouchableOpacity style={[styles.button, tailwind("flex items-center")]}>
                            <Image source={require("../../assets/work_permit/plus.png")} style={styles.icon}/>
                            
                            <Text style ={styles.buttonText}>Company's Business Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind("w-8")} />
                    <View>
                        <TouchableOpacity style={[styles.button, tailwind("flex items-center")]}>
                            <Image source={require("../../assets/work_permit/plus.png")} style={styles.icon}/>
                            
                            <Text style = {styles.buttonText}>Your Business Plan</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            </View>

            <View style={tailwind("flex flex-row mt-10")}>
                <TouchableOpacity style={[styles.button2]}>
                    <View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Image source={require("../../assets/work_permit/plus.png")} style={styles.icon}/>
                        <Text style={styles.buttonText}> Other supporting documents</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={tailwind("mt-5")}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.buttonText2}>Submit application</Text>
                </TouchableOpacity>
            </View>

            <View style={tailwind("mt-36")}></View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 24,
        textAlign: "justify",
        fontFamily: "Poppins-Bold"
    },

    subHeader: {
        color: "#7A7A7A",
        fontSize: 18,
        textAlign: "justify",
        fontFamily: "Poppins-Regular"
    },

    subText1: {
        color: "#C24A4A",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Regular"
    },

    subText2: {
        color: "#717171",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Regular"
    },

    headerImage: {
        width: "100%",
        height: 250,
    },

    headerContainer: {
        width: "100%",
        height: 200,
    },

    icon: {
        width: 28,
        height: 28,
        margin: 2
    },

    bodyContainer: {
        width: "100%",
        height: 1000,
        borderRadius: 30,
        backgroundColor:"#FCFCFC",
        position: 'absolute',
        top: -30,
        zIndex:99,
        elevation:5
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "#888888",
        textAlign: "center"
    },

    buttonText2: {
        fontFamily: "Poppins-Bold",
        color: "white",
        textAlign: "center"
    },

    button: {
        borderRadius:25,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset : { width: 5, height: 5},
        backgroundColor: '#f0f0f0',
        width: 150,
    },

    button2: {
        borderRadius: 20,
        paddingTop: 13,
        paddingBottom: 13,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#f0f0f0',
        width: 330,
    },

    submitButton: {
        borderRadius: 20,
        paddingTop: 17,
        paddingBottom: 17,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#FE904B',
        width: 330,
    },
});

export default UploadScreen;