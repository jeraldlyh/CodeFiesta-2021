import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import tailwind from "tailwind-rn";


function Tab(props) {
    return (
        <View style = {props.active ? styles.active : styles.inactive} >
            <Text onPress = {props.onPress} style={props.active ? styles.activeText : styles.inactiveText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-start',
    },
    activeText:{
        fontSize:20,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft:21,
        paddingRight:21,
        height:30,
    },
    inactiveText:{
        fontSize:20,
        color: '#bbbbbb',
        fontWeight: 'bold',
        paddingLeft:21,
        paddingRight:21,
        height:30,
    },
    active:{
        borderBottomWidth: 2,
        borderColor: 'black',
    }, 
    inactive:{
        borderBottomWidth: 2,
        borderColor: '#bbbbbb',
    
    },
})

export default Tab;