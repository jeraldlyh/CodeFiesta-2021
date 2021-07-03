import React from "react";
import tailwind from "tailwind-rn";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from "react-native-elements";


function ChatHeader(props) {
    return (
        <View style={tailwind("flex flex-row w-full mt-20 items-center")}>
            <TouchableOpacity
                style={tailwind("w-1/5 h-14 rounded-full items-center flex justify-center")}
                onPress={props.onPressed}
            >
                <Icon
                    name='arrow-back-outline'
                    type='ionicon'
                    color='#000'
                />
            </TouchableOpacity>
            <View style={tailwind("w-3/5 flex flex-row items-center")}>
                <Image source={{ uri: props.image }} style={tailwind("rounded-full w-14 h-14 mr-4 -ml-1")} />
                <View style={tailwind("flex flex-col")}>
                    <Text style={[styles.title, tailwind("text-2xl")]}>{props.user}</Text>
                    <View style={tailwind("flex flex-row items-center")}>
                        <View style={[tailwind("rounded-full w-2 h-2 mr-1"), { backgroundColor: "#5AD439" }]} />
                        <Text style={styles.description}>Online</Text>
                    </View>
                </View>
            </View>
            <View style={tailwind("w-1/5")}>
                <Icon name="call" type='ionicon' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
        color: "#AEAEB2"
    },
})

export default ChatHeader;