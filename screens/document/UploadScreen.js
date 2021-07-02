import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tailwind from "tailwind-rn";
import * as ImagePicker from "expo-image-picker";
import { Icon } from 'react-native-elements';

function UploadScreen({ navigation }) {
    // function selectImage() {
    //     let options = {
    //       title: 'You can choose one image',
    //       maxWidth: 256,
    //       maxHeight: 256,
    //       storageOptions: {
    //         skipBackup: true
    //       }
    //     };

    //     launchImageLibrary(options, response => {
    //       console.log({ response });

    //       if (response.didCancel) {
    //         console.log('User cancelled photo picker');
    //         Alert.alert('You did not select any image');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         let source = { uri: response.uri };
    //         console.log({ source });
    //       }
    //     });
    //   }
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Sorry, we need camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);
    const pickImage = async (number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            switch (number) {
                case 1:
                    setImage(result.uri);
                    break;
                case 2:
                    setImage1(result.uri);
                    break;
                case 3:
                    setImage2(result.uri);
                    break;
                case 4:
                    setImage3(result.uri);
                    break;

            }
        }
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
            <ScrollView contentContainerStyle={[tailwind("items-center w-full pb-14")]}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require("../../assets/visa/entre.jpg")}
                        style={styles.headerImage}
                    />

                    <View style={global.container}>
                        <View style={styles.bodyContainer}></View>
                    </View>
                </View>

                <View style={[tailwind("ml-12 mr-12 mt-3 mb-8")]}>
                    <Text style={[styles.title, tailwind("text-2xl text-left")]}>Documents required</Text>
                    <Text style={[styles.content, tailwind("text-lg text-gray-500 mt-1 mb-2")]}>for Entre Pass</Text>

                    <Text style={[styles.subText1, tailwind("mt-3")]}>
                        • Personal particulars page of your passport. {"\n"}• Past
                        employment testimonials in English or resume. {"\n"}• For
                        businesses registered with ACRA, upload company’s latest
                        business profile or instant information from Bizfile. {"\n"}
                        • A business plan in English, maximum 10 pages.
                    </Text>
                    <Text style={[styles.subText2]}>
                        • Other documents that will support your EntrePass
                        application
                    </Text>
                </View>

                <View style={tailwind("flex items-center")}>
                    <View style={tailwind("flex flex-row")}>
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    tailwind("flex items-center"),
                                ]}
                                onPress={() => pickImage(1)}
                            >
                                {image == null ? (
                                    <Image
                                        source={require("../../assets/work_permit/plus.png")}
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.image}
                                    />
                                )}

                                {/* <Image
                                    source={require("../../assets/work_permit/plus.png")}
                                    style={styles.icon}
                                /> */}
                                {/* {image && (
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.image}
                                    />
                                )} */}

                                <Text style={styles.buttonText}>
                                    Passport Personal Particulars{" "}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tailwind("w-8")} />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    tailwind("flex items-center"),
                                ] }
                                onPress={() => pickImage(2)}
                            >
                                {image1 == null ? (
                                    <Image
                                        source={require("../../assets/work_permit/plus.png")}
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: image1 }}
                                        style={styles.image}
                                    />
                                )}

                                <Text style={styles.buttonText}>
                                    Past Employment Testimonials
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={tailwind("flex flex-row mt-6")}>
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    tailwind("flex items-center"),
                                ]}
                                onPress={() => pickImage(3)}
                            >
                                {image2 == null ? (
                                    <Image
                                        source={require("../../assets/work_permit/plus.png")}
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: image2 }}
                                        style={styles.image}
                                    />
                                )}

                                <Text style={styles.buttonText}>
                                    Company's Business Profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tailwind("w-8")} />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    tailwind("flex items-center"),
                                ]}
                                onPress={() => pickImage(3)}
                            >
                                {image3 == null ? (
                                    <Image
                                        source={require("../../assets/work_permit/plus.png")}
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: image3 }}
                                        style={styles.image}
                                    />
                                )}

                                <Text style={styles.buttonText}>
                                    Your Business Plan
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={tailwind("flex flex-row mt-6")}>
                    <TouchableOpacity style={[styles.button2]}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require("../../assets/work_permit/plus.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>
                                {"  "}
                                Other supporting documents
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={tailwind("mt-8")}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.push("Success")}>
                        <Text style={styles.buttonText2}>Submit application</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 24,
        textAlign: "justify",
        fontFamily: "Poppins-Bold",
    },

    subHeader: {
        color: "#7A7A7A",
        fontSize: 18,
        textAlign: "justify",
        fontFamily: "Poppins-Normal",
    },

    subText1: {
        color: "#C24A4A",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Normal",
    },

    subText2: {
        color: "#717171",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Normal",
    },

    content: {
        fontFamily: "Poppins-Normal"
    },

    title: {
        fontFamily: "Poppins-Bold",
    },

    headerImage: {
        width: "100%",
        height: 200,
    },

    headerContainer: {
        width: "100%",
        height: 200,
    },

    icon: {
        width: 28,
        height: 28,
        margin: 2,
    },

    bodyContainer: {
        width: "100%",
        height: 1000,
        borderRadius: 30,
        backgroundColor: "#FCFCFC",
        position: "absolute",
        top: -30,
        zIndex: 99,
        elevation: 5,
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "#888888",
        textAlign: "center",
    },

    buttonText2: {
        fontFamily: "Poppins-Bold",
        color: "white",
        textAlign: "center",
        fontSize: 17,
    },

    button: {
        borderRadius: 25,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: "#f0f0f0",
        width: 150,
    },

    button2: {
        borderRadius: 20,
        paddingTop: 13,
        paddingBottom: 13,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: "#f0f0f0",
        width: 330,
    },

    submitButton: {
        borderRadius: 14,
        marginTop: 8,
        paddingTop: 17,
        paddingBottom: 17,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 0.6,
        elevation: 6,
        shadowRadius: 12,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: "#FE904B",
        width: 330,
    },

    image: {
        width: 130,
        height: 180,
        borderRadius: 14,
    },
});

export default UploadScreen;
