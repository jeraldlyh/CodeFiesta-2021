import React from "react";
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

function Button(props) {
    return (
        <TouchableOpacity style={[styles.button, tailwind("mt-5 pl-8 h-20 w-5/6 flex flex-row items-center justify-start")]}>
 
            <Icon
                name="game-controller-outline"
                type="ionicon"
                color="#aeaebf"
            />
            <View style={tailwind("ml-6")}>
                <Text style={[styles.text, tailwind("text-base")]}>New Quest: Chinatown</Text>
                <Text style={tailwind("text-sm text-gray-400 font-normal")}>11 hours ago</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    button: {
        borderRadius: 14,
        backgroundColor: 'white',
        paddingHorizontal: 20
    }
})

export default Button;


