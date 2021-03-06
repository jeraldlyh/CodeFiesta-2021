import React, { Fragment, useContext } from "react";
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { AuthContext } from "../../../provider/AuthProvider";
import Ionicons from 'react-native-vector-icons/Ionicons';

function Button(props) {
    const { setIsLoggedIn } = useContext(AuthContext);

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <TouchableOpacity 
            style={[styles.container, props.text === "Logout" ? { backgroundColor: "#FE904B" } : { backgroundColor: "#F6F6F6" }]}
            onPress={props.text === "Logout" ? logout : null}
        >
            <View style={tailwind("w-1/6 -ml-2")}>
                <Icon name={props.icon}
                    type="ionicon"
                    iconStyle={props.text === "Logout" ? { color: "#fff" } : styles.iconColor}
                />
            </View>
            <View style={tailwind("justify-start w-4/6 mr-8")}>
                <Text style={[styles.text, props.text === "Logout" ? { color: '#fff' } : { color: '#888899', }]}> {props.text}</Text>
            </View>
            {
                props.text === "Logout"
                    ? <Ionicons style={tailwind("w-5")} />
                    : 
                        <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
                
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    iconColor: {
        color: '#888899'
    },
    text: {
        fontFamily: 'Poppins-SemiBold'
    },
    container: {
        height: 54,
        flexDirection: 'row',
        width: 350,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,  
        borderRadius:14,
        marginBottom:5,
    }
})

export default Button;