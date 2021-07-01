import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";


function Header(props) {
    return (
        props.title
            ? <View style={tailwind("mt-20 flex pl-3 pr-3 mb-5")}>
                <Text style={styles.header}>{props.title}</Text>
            </View>
            : <View style={tailwind("h-20")} />
    )
};

const styles = StyleSheet.create({
    header: {
        
        fontFamily: "Poppins-Bold",
        fontSize: 25,
    }
});


export default Header;