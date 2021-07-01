import React from 'react';
import { View, Image } from 'react-native';

function Currency(props) {
    return (
        <View >
            <Image source = {require("../assets/icons/currency.png")} style = {{height:props.height, width:props.width}}/>
        </View>
    );
}

export default Currency;