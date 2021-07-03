import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import moment from "moment";
import Currency from '../../../components/Currency';

function Quests(props) {
    const getQuestAvailability = () => {
        var currentTime = moment(new Date().getTime());
        var createdAt = moment(props.time);
        var difference = currentTime.diff(createdAt, "hours");
        return 24 - difference >= 0 ? 24 : difference;
    };
    return (
        <View style = {styles.container}>
            <Image source = {{uri:props.image}} style = {{height:76,width:163,borderRadius:14}}/>
            <View style = {{padding:10}}>
            <Text style = {styles.header}>{props.action} to earn {props.points} <Currency height = {14} width = {14} /> !</Text>
            <Text style = {styles.time}>{getQuestAvailability()} hours left</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:163,
        height:148,
        marginRight:20,
        marginBottom:20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
        borderRadius:14,
    },
    header:{
        fontFamily:'Poppins-SemiBold',
        fontSize:13
    },
    time:{
        fontFamily:'Poppins-Normal',
        fontSize:11,
        color:'#AEAEBF'
    }

})

export default Quests;