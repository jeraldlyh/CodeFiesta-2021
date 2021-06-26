import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

function Options(props) {
    console.log(props.styles)
    return (
        <View style = {props.styles}>
            <Text style = {{fontSize:17,color:'black'}} onPress = {props.onPress}>{props.data}</Text>
        </View>
    );
}



export default Options;