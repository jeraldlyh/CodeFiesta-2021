import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';

function Quests(props) {
    return (
        <View style = {styles.container}>
            <Image source = {require("../../../assets/quests/chinatownCartoon.jpeg")} style = {{height:76,width:163,borderRadius:14}}/>
            <View style = {{padding:10}}>
                <Text style = {styles.header}>Check in at Chinatown to earn 50!</Text>
                <Text style = {styles.time}>13 hours left</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:163,
        height:148,
        marginRight:20
    },
    header:{
        fontFamily:'Poppins-SemiBold',
        fontSize:11
    },
    time:{
        fontFamily:'Poppins-Normal',
        fontSize:10,
        color:'#AEAEBF'
    }

})

export default Quests;