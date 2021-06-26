import React from 'react';
import { SafeAreaView,StyleSheet,Text,Image,View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {Icon} from 'react-native-elements/'
import { useNavigation } from '@react-navigation/native';



function WorkPassApplication(props) {
    // const navigation = useNavigation();
    // const startWorkApp = () =>{
    //     // navigation.navigate("WorkPass1")
    // }

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.backButtonContainer}>
                <Icon name = 'arrow-left' size = {40}/>
            </View>
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerStyle}>Lets apply for</Text>
            <Text style = {styles.headerStyle}>your work pass</Text>
        </View>
        <Image source = {require("../../assets/workpass/image.png")}/>

        <View style = {styles.Button}>
            <Text style = {{fontSize:17,color:'white'}}>Start application process</Text>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    backButtonContainer:{
        justifyContent:'flex-start',
        right:150

    },
    headerStyle:{
        
        fontSize:34
    },
    headerContainer:{
        width:305,
        marginTop:30,
        marginBottom:40
    },
    Button:{
        marginTop:100,
        width:303,
        height:59,
        borderRadius:14,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FE904B'
    }
})

export default WorkPassApplication;