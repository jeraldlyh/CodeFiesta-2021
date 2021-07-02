import React, { Fragment, useContext } from "react";
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { AuthContext } from "../../../provider/AuthProvider";

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
            <View style={tailwind("w-4/6 mr-4")}>
                <Text style={[styles.text, props.text === "Logout" ? { color: '#fff' } : { color: '#9999AA', }]}> {props.text}</Text>
            </View>
            {
                props.text === "Logout"
                    ? null
                    : <View style={tailwind("w-1/6")}>
                        <Icon name='chevron-forward-outline'
                            type="ionicon"
                            iconStyle={styles.iconColor}
                        />
                    </View>
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    iconColor: {
        color: '#9999AA'
    },
    text: {
        fontFamily: 'Poppins-Normal'
    },
    container: {
        height: 54,
        flexDirection: 'row',
        width: 350,
        borderRadius: 14,
        alignItems: 'center',
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