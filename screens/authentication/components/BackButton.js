import React from "react";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

function BackButton(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Icon
                name='arrow-back-outline'
                type='ionicon'
                color={props.color}
            />
        </TouchableOpacity>
    )
};

export default BackButton;