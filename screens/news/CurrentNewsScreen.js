import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet,Text,ScrollView, Touchable } from 'react-native';
import tailwind from "tailwind-rn";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


function CurrentNewsScreen(props) {
    const navigation = useNavigation();
    return (
        <>
            <View style={tailwind("self-start top-10 ml-4 z-10")}>
                <TouchableOpacity
                        style={tailwind("bg-gray-300 w-14 h-14 rounded-full absolute opacity-50 items-center flex justify-center")}
                        onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#000'
                    />
                </TouchableOpacity>
            </View>
            <ScrollView >
                <Image source={require("../../assets/news/backgroundImage.png")} style={styles.backgroundImage} />
                <View style={{marginTop:180,left:30}}>
                    <Text style={[tailwind('text-white font-extrabold text-xl pr-24'), {bottom: 60}]}>13 new community COVID-19 cases in Singapore, including 6 unlinked; 4 imported cases</Text>
                    <View style={styles.details} />
                    <Text style = {{fontFamily:'Poppins-Normal',fontSize:14,color:'white', bottom: 37, left:16}}>2 hours ago</Text>
                </View>
                <View style = {styles.articleContainer}>
                    <Text style={tailwind("text-base")}>
                    <Text style={tailwind("font-semibold")}>SINGAPORE -</Text> There were 17 new coronavirus cases confirmed as at Saturday noon (June 26), taking Singapore's total to 62,530. Of these cases, 13 are in the community and four are imported. 
                    </Text>
                    <Text style={tailwind("text-base mt-5")}>
                        The 13 community cases include six unlinked cases. The remaining seven are linked to existing cases.
                    </Text>
                    <Text style={tailwind("text-base mt-5")}>
                        Of the linked cases, four were already quarantined, while the other three were detected through surveillance. The four imported cases were placed on stay-home notices on arrival in Singapore, said the Ministry of Health.
                    </Text>
                    <Text style={tailwind("text-base mt-5")}>
                        No new cases were reported in the migrant worker dormitories.
                    </Text>
                    <Text style={tailwind("text-base mt-5")}>
                        Singapore has had 35 deaths from Covid-19 complications, while 15 who tested positive have died of other causes.
                    </Text>
                    <Text style={tailwind("text-base mt-5")}>
                        More details will be announced on Saturday night.
                    </Text>
                    <Image source={require("../../assets/news/stats.png")} style={tailwind("w-full h-72 mt-10")} />
                </View>
                
                
            </ScrollView>
        </>
        
    );
}

const styles = StyleSheet.create({
    details: {
        position: "absolute",
        bottom: 30,
        height:32,
        width:115,
        backgroundColor: "#7d7d7d",
        opacity: 0.37,
        borderRadius: 12,
        padding:10
    },
    container:{
        flex:1,
        alignItems:'stretch',
        width:'100%',
    },
    articleContainer:{
        borderRadius:24,
        width:'100%',
        height: '100%',
        alignItems:'flex-start',
        backgroundColor:'white',
        padding:35,
        paddingBottom:50
    },
    backgroundImage:{
        ...StyleSheet.absoluteFillObject,
        width:'100%',
        height: 'auto',
    },
})


export default CurrentNewsScreen;