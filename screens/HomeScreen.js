import React from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Searchbar, Card, Paragraph } from "react-native-paper";
import tailwind from "tailwind-rn";

function HomeScreen({ navigation }) {
    return (
        <View>
            <View style={tailwind("flex items-center mt-3")} >
                <Searchbar
                    style={tailwind("w-5/6")}
                    inputStyle={styles.searchBar}
                    placeholder="Search"
                />
                <View style={tailwind("mt-5")}>
                    <Text style={[styles.header, tailwind("text-2xl text-left")]}>Applications</Text>
                </View>
                <View style={tailwind("flex flex-row mt-4")}>
                    <TouchableOpacity onPress={() => navigation.push("Work Permit")}>
                        <Card style={tailwind("h-60 w-48 rounded-lg mr-1")}>
                            <Card.Cover source={require("../assets/home/workPermit.jpg")} style={tailwind("h-28 rounded-lg")} />
                            <View style={tailwind("p-3")}>
                                <Text style={[styles.header, tailwind("text-left")]}>Apply for Work Permit</Text>
                                <Text style={[styles.searchBar, tailwind("text-left")]}>Get to know what work permit you are eligible for and start applying now</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card style={tailwind("h-60 w-48 rounded-lg ml-1")}>
                            <Card.Cover source={require("../assets/home/news.jpg")} style={tailwind("h-28 rounded-lg")} />
                            <View style={tailwind("p-3")}>
                                <Text style={[styles.header, tailwind("text-left")]}>Get current news</Text>
                                <Text style={[styles.searchBar, tailwind("text-left")]}>Keep up with current news in Singapore! Find out what happened recently</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>
                <View style={tailwind("flex flex-row mt-4")}>
                    <TouchableOpacity>
                        <Card style={tailwind("h-60 w-48 rounded-lg mr-1")}>
                            <Card.Cover source={require("../assets/home/singapore.jpg")} style={tailwind("h-28 rounded-lg")} />
                            <View style={tailwind("p-3")}>
                                <Text style={[styles.header, tailwind("text-left")]}>Get to know Singapore</Text>
                                <Text style={[styles.searchBar, tailwind("text-left")]}>Unfamiliar with Singapore? Fret now! click here to find out more.</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card style={tailwind("h-60 w-48 rounded-lg ml-1")}>
                            <Card.Cover source={require("../assets/home/friends.jpg")} style={tailwind("h-28 rounded-lg")} />
                            <View style={tailwind("p-3")}>
                                <Text style={[styles.header, tailwind("text-left")]}>Make new friends</Text>
                                <Text style={[styles.searchBar, tailwind("text-left")]}>Click here to make friends with people who are  new to Singapore as well!</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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

export default HomeScreen;