import React from "react";
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

function Button(props) {
    return (
        <TouchableOpacity style={[styles.button, tailwind("border-b border-gray-200 pl-8 w-5/6 flex flex-row items-center justify-start")]}>
            {
                props.type === "quest" ?
                <>
                    <Icon
                        name="game-controller-outline"
                        type="ionicon"
                        color="#aeaebf"
                    />
                    <View style={tailwind("ml-6")}>
                        <Text style={[styles.text, tailwind("text-base")]}>New Quest: {props.name}</Text>
                        <Text style={tailwind("text-sm text-gray-400 font-normal")}>{props.time}</Text>
                    </View>
                </>
                :
                <>
                    <Icon
                        name="document-text-outline"
                        type="ionicon"
                        color="#aeaebf"
                    />
                    <View style={tailwind("ml-6")}>
                        <Text style={[styles.text, tailwind("text-base")]}>Application {props.status}:</Text>
                        <Text style={[styles.text, tailwind("text-base")]}>{props.name}</Text>
                        <Text style={tailwind("text-sm text-gray-400 font-normal")}>{props.time}</Text>
                    </View>
                </>
            }
            
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 18
    }
})

export default Button;


