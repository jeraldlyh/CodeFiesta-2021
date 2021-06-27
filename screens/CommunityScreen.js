import React from 'react';
import { Searchbar } from "react-native-paper";
import { View,Text, StyleSheet,ScrollView, Button,Image } from 'react-native';
import tailwind from "tailwind-rn";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

function CommunityScreen(props) {
    return (
        <SafeAreaView>
            <View style={[tailwind("mt-5 ml-5 items-center"),{flexDirection:"row",justifyContent:'space-between'}]}>
                <Text style={[styles.header, tailwind("text-3xl text-left")]}>My Community</Text>
                <TouchableOpacity style = {styles.questButton}>
                <Icon
                    name='document-text-outline'
                    type='ionicon'
                    color='#F7F7F7'
                />
                    <Text style = {{fontSize:8,fontFamily:'Poppins-Bold',color:'#F7F7F7'}}>Quests</Text>
                </TouchableOpacity>
            </View>
            <Searchbar
                style={tailwind("w-5/6 mx-3 mt-5")}
                inputStyle={styles.searchBar}
                placeholder="Search"
            />
            <View style={tailwind("items-center mt-8")}>
                <Image source = {require("../assets/community/singaporeMap.png")} />
            </View>
            
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    searchBar: {
        fontFamily: "Poppins-Normal"
    },
    header: {
        fontFamily: "Poppins-Bold",
    },
    questButton:{
        flexDirection:'column',
        height:47,
        width:51,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FE904B',
        right:10,
        borderRadius:14,
        fontSize:20
    }
})

export default CommunityScreen;