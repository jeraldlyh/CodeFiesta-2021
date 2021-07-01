import React from "react";
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";


function Layout(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
            <View style={tailwind("self-start top-10 ml-10 z-10")}>
                <View style={tailwind("flex items-center justify-center")}>
                    <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-75")}
                        onPress={() => navigation.goBack()}
                    />
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#000'
                    />
                </View>
            </View>

            <View style={tailwind("flex-1 pl-3 pr-3 items-center")}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

export default Layout;