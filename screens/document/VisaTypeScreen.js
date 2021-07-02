import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, LayoutAnimation, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";
import { Icon } from 'react-native-elements';

function VisaTypeScreen({ navigation }) {
    const [entrePass, setEntrePass] = useState(false);
    const [empPass, setEmpPass] = useState(false);
    const [personEmpPass, setPersonEmpPass] = useState(false);
    const [sPass, setSPass] = useState(false);


    const toggleEntre = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setEntrePass(!entrePass);
    };

    return (
        <>
            <View style={tailwind("self-start top-10 ml-4 z-10")}>
                <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-50 items-center flex justify-center")}
                        onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#000'
                    />
                </TouchableOpacity>
            </View>
            <View style={tailwind("flex-1")}>
                <Image
                    source={require("../../assets/welcome/1.webp")}
                    style={styles.headerImage}
                />
                <View style={[tailwind("flex-1 w-full mt-44"), { backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30 }]}>
                    <View style={tailwind("flex flex-col ml-10 mt-10")}>
                        <Text style={[styles.title, tailwind("text-2xl text-left")]}>Work Visas for migration to Singapore</Text>
                        <Text style={[styles.content, tailwind("text-lg text-gray-500 mt-3 mb-6")]}>Click to find out more</Text>
                    </View>

                    <ScrollView contentContainerStyle={[tailwind("flex flex-col items-center"), { paddingTop: 25, paddingBottom: 60 }]}>
                        <TouchableOpacity style={tailwind("mt-3")} onPress={() => toggleEntre()}>
                            <View style={tailwind("flex flex-col items-center")}>
                                <View style={tailwind("flex items-center justify-center")}>
                                    <Image style={tailwind("absolute w-80 h-16 rounded-xl")} source={require("../../assets/visa/entre.jpg")} />
                                    <Text style={[tailwind("text-white text-lg"), styles.content]}>Entre Pass</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {
                            entrePass
                                ? <View style={[tailwind("mt-2 bg-gray-100 w-80 rounded-lg p-2"), styles.card]}>
                                    <Text style={styles.content}>
                                        {`
    The Entre Pass is valid for a period of 1 year and may be renewed further.

    Dependents can be brought to Singapore only after the pass has been renewed once.

    Eligibility criteria for an Entre Pass:
    • The individual must be at least 21 years old.
    • He or she must have the relevant education and experience.
    • The applicant must own at least 30% of the new venture.
    • The business must be able to provide local employment.
    • The individual’s business must be registered with the Accounting and Corporate Regulatory Authority (ACRA) or he must intend on registering it on receiving the Entre Pass.

    The new business must meet one of the below 4 criteria:
    • It must be funded by an accredited VC
    • It must have proprietary intellectual property
    • It must work in collaboration with a premier research institution
    • It must work with a government-supported incubator
    `}
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.push("Upload")}>
                                        <View style={[tailwind("flex items-center justify-center rounded-full self-end w-24 h-8 mb-1 mr-1"), styles.apply]}>
                                            <Text style={[tailwind("text-white"), styles.content]}>Apply now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                : null
                        }

                        <TouchableOpacity style={tailwind("mt-16")}>
                            <View style={tailwind("flex flex-col items-center")}>
                                <View style={tailwind("flex items-center justify-center")}>
                                    <Image style={tailwind("absolute w-80 h-16 rounded-xl")} source={require("../../assets/visa/employment.jpg")} />
                                    <Text style={[tailwind("text-white text-lg"), styles.content]}>Employment Pass</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={tailwind("mt-16")}>
                            <View style={tailwind("flex flex-col items-center")}>
                                <View style={tailwind("flex items-center justify-center")}>
                                    <Image style={tailwind("absolute w-80 h-16 rounded-xl")} source={require("../../assets/visa/personalized.jpg")} />
                                    <Text style={[tailwind("text-white text-lg text-center"), styles.content]}>Personalized Employment Pass (PEP)</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={tailwind("mt-16")}>
                            <View style={tailwind("flex flex-col items-center")}>
                                <View style={tailwind("flex items-center justify-center")}>
                                    <Image style={tailwind("absolute w-80 h-16 rounded-xl")} source={require("../../assets/visa/spass.jpg")} />
                                    <Text style={[tailwind("text-black text-lg"), styles.content]}>S Pass</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    content: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    },
    apply: {
        backgroundColor: "#3D3D3D"
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    headerImage: {
        width: "100%",
        height: 200,
        position: "absolute"
    }, 
})

export default VisaTypeScreen;