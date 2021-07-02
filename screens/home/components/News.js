import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import tailwind from "tailwind-rn";


function News(props) {
    return (
        <View style = {styles.container}>
            <Image source = {require("../../../assets/news/COVID-19.jpeg")} style = {styles.image} />
            <View style = {[tailwind("w-full"), {width:200,marginLeft:20}]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:11}}>MOH, expert counter claims by doctors on need to halt COVID-19 jabs for schoolboys</Text>
                <Text style = {{fontFamily:'Poppins-Normal', fontSize:10, color:'#AEAEBF'}}>2 hours ago</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:87,
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
        borderRadius:14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    image:{
        width:100,
        height:87,
        borderRadius:14
    }
})

export default News;