import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView,Text } from 'react-native';
import Options from './components/options';


function WorkPassApplication1(props) {
    const [isPressed1,press1] = useState(true)
    const [isPressed2,press2] = useState(true)
    const [isPressed3,press3] = useState(true)
    const toggle1 = () =>{
        press1(!isPressed1)
    }
    const toggle2 = () =>{
        press2(!isPressed2)
    }
    const toggle3 = () =>{
        press3(!isPressed3)
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.buttonContainer}>
            </View>
            <View style = {styles.headerContainer}>
            <Text style = {styles.headerStyle}>What kind of user</Text>
            <Text style = {styles.headerStyle}>are you?</Text>
            </View>
            <Options data = {"I'm moving for work"} styles = {isPressed1? styles.ButtonPressed:styles.Button} onPress = {()=>toggle1()}/>
            <Options data = {"I'm moving for school/to reunite with my family"} styles = {isPressed2? styles.ButtonPressed:styles.Button} onPress = {()=>toggle2()} />
            <Options data = {"I wish to be a Permanent Resident(PR)"} styles = {isPressed3? styles.ButtonPressed:styles.Button} onPress = {()=>toggle3()} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%'
    },
    Button:{
        
        marginTop:20,
        width:303,
        height:59,
        borderRadius:14,
        borderWidth:1,
        padding:10,
        justifyContent:'center',
        backgroundColor: '#FE904B'
    },
    ButtonPressed:{
        marginTop:20,
        width:303,
        height:59,
        borderRadius:14,
        borderWidth:1,
        padding:10,
        justifyContent:'center',
        backgroundColor: '#F0F0F0',
        fontSize:17,
        color:'black'
    },
    headerStyle:{
        fontSize:34
    },
    headerContainer:{
        width:305,
        marginTop:30,
        marginBottom:40
    },
    

})

export default WorkPassApplication1;