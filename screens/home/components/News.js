import React from 'react';
import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import { useNavigation } from '@react-navigation/native';

function News(props) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style = {styles.container} onPress={() => navigation.push('CurrentNews')}>
             { props.image === "covid" ? <Image source={require("../../../assets/news/covid.png")} style={styles.image} /> : null }
            { props.image === "migrantWorkers" ? <Image source={require("../../../assets/news/migrantWorkers.jpeg")} style={styles.image} /> : null }
            { props.image === "cgh" ? <Image source={require("../../../assets/news/cgh.jpeg")} style={styles.image} /> : null }
         
            <View style = {[tailwind("w-full"), {width:200,marginLeft:20}]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:13}}>{props.header}</Text>
                <Text style = {{fontFamily:'Poppins-Normal', fontSize:11, color:'#AEAEBF'}}>{props.time} hours ago</Text>
            </View>
        </TouchableOpacity>
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