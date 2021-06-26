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
            color: "white",
            fontSize: 16
        }
    });

    return (
        <View style={[styles.background, tailwind("w-4/5 rounded-lg h-12 flex items-center justify-center")]}>
            <TouchableOpacity onPress={props.onPress} styles={styles.background}>
                <View style={tailwind("flex flex-row items-center")}>
                    <Text style={[styles.text, tailwind("mr-3")]}>{props.text}</Text>
                    {props.children}
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default Button;