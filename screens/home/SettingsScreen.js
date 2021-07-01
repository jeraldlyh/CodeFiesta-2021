import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from "tailwind-rn";
import { StyleSheet, View,Text } from 'react-native';
import { Icon } from 'react-native-elements'


function SettingsScreen(props) {
    return (
        <SafeAreaView>
            <View style={tailwind("mt-5 ml-7")}>
                <Text style={[styles.header, tailwind("text-4xl text-left")]}>Settings</Text>
            </View>
            <View style = {{alignItems:'center',width:'80%',alignSelf:'center'}}>
                <Text style = {{alignSelf:'flex-start',marginBottom:10,marginTop:10}}>Account</Text>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Edit Profile</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Set Two-Factor Authentication</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Language</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Font Size</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                
            </View>
            <View style = {{alignItems:'center',width:'80%',alignSelf:'center'}}>
                <Text style = {{alignSelf:'flex-start',marginBottom:10,marginTop:10}}>Account</Text>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Report a problem</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                
                
            </View>
            <View style = {{alignItems:'center',width:'80%',alignSelf:'center'}}>
                <Text style = {{alignSelf:'flex-start',marginBottom:10,marginTop:10}}>Account</Text>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Edit Profile</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Set Two-Factor Authentication</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                <View style = {styles.individualRow}>
                    <View style = {tailwind("flex flex-row items-center")}>
                    <Icon name='account-circle'
                    type='material-community'
                    iconStyle = {styles.iconColor}/>
                    <Text style = {styles.text}> Language</Text>
                    </View>
                        <Icon name='arrow-forward-ios'
                        type='materialicons'
                        color='red' iconStyle = {styles.iconColor}/>
                </View>
                
            </View>

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    iconColor:{
        color:'#9999AA'
    },
    text:{
        color:'#9999AA',
        fontFamily:'Poppins-Normal'
    },
    individualRow:{
        height:54,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        borderRadius:14,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        paddingHorizontal:20
    }
})

export default SettingsScreen;