import React from "react";
import { View, ImageBackground, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import tailwind from "tailwind-rn";


function HomeScreen() {
    return (
        <View>
            <View style={tailwind("flex items-center mt-3")} >
                <Searchbar 
                    style={tailwind("w-5/6")}
                    inputStyle={styles.searchBar}
                    placeholder="Search"
                />
                <View style={tailwind("mt-5")}>
                    <Text style={[styles.header, tailwind("text-2xl")]}>Applications</Text>
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