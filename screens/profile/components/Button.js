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
                    ? <Fragment />
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
        // shadowColor: 'rgba(0, 0, 0, 0.1)',
        // shadowOpacity: 0.8,
        // elevation: 6,
        // shadowRadius: 10,
        // shadowOffset: { width: 1, height: 13 },
    }
})

export default Button;