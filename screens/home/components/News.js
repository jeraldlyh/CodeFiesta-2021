import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';


function News(props) {
    return (
        <View style = {styles.container}>
            <Image source = {require("../../../assets/news/COVID-19.jpeg")} style = {styles.image} />
            <View style = {{width:164,marginLeft:20}}>
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
        marginTop:10,
        alignItems:'center',
        borderRadius:14,
        borderWidth:0.3,
        
    },
    image:{
        width:100,
        height:87,
        borderRadius:14
    }
})

export default News;