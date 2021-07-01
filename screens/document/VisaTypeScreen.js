import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, LayoutAnimation, ScrollView } from 'react-native';
import tailwind from "tailwind-rn";


function VisaTypeScreen({ navigation }) {
    const [entrePass, setEntrePass] = useState(true);
    const [empPass, setEmpPass] = useState(true);
    const [personEmpPass, setPersonEmpPass] = useState(true);
    const [sPass, setSPass] = useState(true);


    const toggleEntre = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setEntrePass(!entrePass);
    };

    return (
        <View style={tailwind("flex-1 p-10")}>
            <Text style={[styles.title, tailwind("text-2xl text-left mt-5")]}>There are the work visa to migrate to Singapore</Text>
            <Text style={[styles.content, tailwind("self-start text-xl text-gray-500 mt-3 mb-6")]}>Click to find out more</Text>

            <ScrollView contentContainerStyle={[tailwind("flex flex-col items-center"), { paddingTop: 25 }]}>
                <TouchableOpacity style={tailwind("mb-3")} onPress={() => toggleEntre()}>
                    <View style={tailwind("flex flex-col items-center")}>
                        <View style={tailwind("flex items-center justify-center")}>
                            <Image style={tailwind("absolute w-80 h-16 rounded-xl opacity-60")} source={require("../../assets/visa/entre.jpg")} />
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
                            <TouchableOpacity>
                                <View style={[tailwind("flex items-center justify-center rounded-full self-end w-20 h-7"), styles.apply]}>
                                    <Text style={[tailwind("text-white"), styles.content]}>Apply now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        : null
                }

                <TouchableOpacity style={tailwind("mt-12")}>
                    <View style={tailwind("flex flex-col items-center")}>
                        <View style={tailwind("flex items-center justify-center")}>
                            <Image style={tailwind("absolute w-80 h-16 rounded-xl opacity-60")} source={require("../../assets/visa/employment.jpg")} />
                            <Text style={[tailwind("text-white text-lg"), styles.content]}>Employment Pass</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind("mt-12")}>
                    <View style={tailwind("flex flex-col items-center")}>
                        <View style={tailwind("flex items-center justify-center")}>
                            <Image style={tailwind("absolute w-80 h-16 rounded-xl opacity-60")} source={require("../../assets/visa/personalized.jpg")} />
                            <Text style={[tailwind("text-white text-lg text-center"), styles.content]}>Personalized Employment Pass (PEP)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind("mt-12")}>
                    <View style={tailwind("flex flex-col items-center")}>
                        <View style={tailwind("flex items-center justify-center")}>
                            <Image style={tailwind("absolute w-80 h-16 rounded-xl opacity-60")} source={require("../../assets/visa/spass.jpg")} />
                            <Text style={[tailwind("text-black text-lg"), styles.content]}>S Pass</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
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
    }
})

export default VisaTypeScreen;