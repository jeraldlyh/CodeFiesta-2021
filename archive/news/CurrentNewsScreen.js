import React from 'react';
import { View,Image, StyleSheet,Text,ScrollView, Touchable } from 'react-native';
import tailwind from "tailwind-rn";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



function CurrentNewsScreen(props) {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
        <ScrollView >
            <Image source={require("../../assets/news/backgroundImage.png")} style={styles.backgroundImage} />
            <View style={{marginTop:250,right:30}}>
                <Text style={[styles.header, tailwind("text-4xl text-left ml-16 mb-2")]}>COVID-19 news</Text>
            </View>
            <View style = {styles.articleContainer}>
                <View style = {styles.singleArticle}>
                    <Text style = {styles.articleHeader}>13 new community COVID-19 cases in Singapore, including 6 unlinked; 4 imported cases.</Text>
                    <Text style = {styles.articleTime}>2 hours ago</Text>
                    <Text style = {styles.articleContent}>There were 17 new coronavirus cases confirmed as at Saturday noon (June 26), taking Singapore's total to 62,530. Of these cases, 13 are in the community and ...</Text>
                    <TouchableHighlight style = {styles.articleButton}><Text style={{ color: "#FBFBFB",fontSize:10, }}>Go to article</Text></TouchableHighlight>
                </View>
                <View style = {styles.singleArticle}>
                    <Text style = {styles.articleHeader}>Great World City mall and Ikea, Courts outlets in Tampines among places visited by Covid cases while infectious</Text>
                    <Text style = {styles.articleTime}>4 hours ago</Text>
                    <Text style = {styles.articleContent}>In its second update on the coronavirus situation here, the Ministry of Health (MOH) said on Friday (June 25) that the infectious persons had been to these places...</Text>
                    <TouchableHighlight style = {styles.articleButton}><Text style={{ color: "#FBFBFB",fontSize:10, }}>Go to article</Text></TouchableHighlight>
                </View>
                <View style = {styles.singleArticle}>
                    <Text style = {styles.articleHeader}>Mandatory Covid-19 test for residents of Tiong Bahru block after 13 cases found in 3 households</Text>
                    <Text style = {styles.articleTime}>18 hours ago</Text>
                    <Text style = {styles.articleContent}>Mandatory testing will be conducted for those living at Block 66 Eng Watt Street, at the pavilion of 2D Boon Tiong Road on June 26 and 27 between 9am and ...</Text>
                    <TouchableHighlight style = {styles.articleButton}><Text style={{ color: "#FBFBFB",fontSize:10, }}>Go to article</Text></TouchableHighlight>
                </View>
                

            </View>
            
            
        </ScrollView>
            <View style = {styles.backButton}>
                <Button onPress = {()=>navigation.goBack()}text="Back" backgroundColor="#FE904B" textColor="#FFF" />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        width:'100%',
    },
    articleContainer:{
        borderRadius:24,
        borderTopWidth:0.5,
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        width:'100%',
        alignItems:'center',
        backgroundColor:'white',
        padding:30,
        paddingBottom:100
    },
    backButton:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        bottom:20,
    },
    articleButton:{
        height:18,
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        borderRadius:7,
        borderWidth:1,
        fontFamily:'Poppins-Normal',
        backgroundColor:'#3D3D3D',
    },
    articleTime:{
        fontSize:10,
        fontFamily:'Poppins-Normal',
    },
    articleContent:{
        fontSize:10,
        fontFamily:'Poppins-Normal',
        marginTop:10,
    },
    backgroundImage:{
        ...StyleSheet.absoluteFillObject,
        width:'100%'
    },
    header: {
        fontFamily: "Poppins-Bold",
        color:'white'
    },
    singleArticle:{
        width:'100%',
        borderWidth:1,
        borderRadius:14,
        padding:10,
        marginTop:20,
        backgroundColor:'#F8F8F8'
    },
    articleHeader:{
        fontSize:13,
        fontFamily:'Poppins-Bold'
    }
})


export default CurrentNewsScreen;