import React from "react";
import { StyleSheet, View, Image,Text } from "react-native";

function ApplicationStatus(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/visa/entre.jpg")}
                style={styles.container}
            />
            <View style={styles.details}>
                <View style = {styles.nameDate}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:17,color:'white'}}>{props.name}</Text>
                    <Text style = {{fontFamily:'Poppins-Normal',fontSize:10,color:'white'}}>{props.date}</Text>
                </View>
                <Text style = {{fontFamily:'Poppins-Normal',fontSize:12,color:'white'}}>Status: {props.status}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 245,
        height: 133,
        borderRadius: 14,
        marginRight:20,
        marginBottom:20,
        backgroundColor:'#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    details: {
        height: 60,
        width: 179,
        position: "absolute",
        bottom: 10,
        left: 10,
        backgroundColor: "#000000",
        opacity: 0.6,
        borderRadius: 14,
        padding:10
    },
    nameDate:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});

export default ApplicationStatus;
