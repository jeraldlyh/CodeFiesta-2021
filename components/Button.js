import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import tailwind from "tailwind-rn";

function Button(props) {
    const styles = StyleSheet.create({
        background: {
            backgroundColor: `${props.backgroundColor}`,
        },
        text: {
            fontFamily: "Poppins-Bold",
            color: `${props.textColor}`,
            fontSize: 16,
        }
    });

    const getDesign = () => {
        if (props.height && props.width) {
            return `w-4/5 rounded-lg h-${props.height} w-${props.width} flex items-center justify-center`;
        }
        if (props.height) {
            return `w-4/5 rounded-lg h-${props.height} flex items-center justify-center`;
        }
        return "w-4/5 rounded-lg h-16 flex items-center justify-center";
    };

    return (
        <View style={[styles.background, tailwind(getDesign())]}>
            <TouchableOpacity onPress={props.onPress} style={tailwind("w-full")}>
                <View style={tailwind("flex flex-row items-center justify-center")}>
                    <Text style={[styles.text, tailwind("mr-2 p-4 text-center")]}>{props.text}</Text>
                    {props.children}
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default Button;