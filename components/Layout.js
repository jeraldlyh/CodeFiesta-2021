import React from "react";
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";


function Layout(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
            <View style={tailwind("self-start top-1 ml-8 z-10")}>
                {
                    props.settingsButton ? 
                    null
                    :
                    <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-70 items-center flex justify-center")}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name='arrow-back-outline'
                            type='ionicon'
                            color='#000'
                        />
                    </TouchableOpacity>
                }
            </View>
            {
                props.settingsButton
                    ? <View style={tailwind("self-end top-1 mr-8 z-10")}>
                        <TouchableOpacity
                            style={tailwind("bg-gray-300 w-14 h-14 rounded-full opacity-75 items-center flex justify-center")}
                            onPress={() => navigation.push("Settings")}
                        >
                            <Icon
                                name='settings'
                                type='ionicon'
                                color='#000'
                            />
                        </TouchableOpacity>
                    </View>
                    : null
            }

            <View style={tailwind("flex-1 pl-3 pr-3 items-center mt-1")}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

export default Layout;