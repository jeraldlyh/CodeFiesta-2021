import React from 'react';
import tailwind from "tailwind-rn";
import { StyleSheet, View, Text } from 'react-native';
import Button from "./components/Button";
import Layout from '../../components/Layout';
import Header from '../../components/Header';

function SettingsScreen() {
    return (
        <Layout>
            <Header />
            <View style={tailwind("mt-5 self-start")}>
                <Text style={[styles.header, tailwind("text-4xl")]}>Settings</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.subHeader}>Account</Text>
                <Button text="Set Two-Factor Authentication" icon="lock-closed-outline" />
                <Button text="Language" icon="chatbubble-ellipses-outline" />
                <Button text="Font Size" icon="text-outline" />
            </View>

            <View style={styles.container}>
                <Text style={styles.subHeader}>Support</Text>
                <Button text="Report a problem" icon="alert-circle-outline" />
            </View>

            <View style={styles.container}>
                <Text style={styles.subHeader}>About</Text>
                <Button text="Terms of Use" icon="newspaper-outline" />
                <Button text="Privacy Policy" icon="shield-checkmark-outline" />
                <Button text="About Us" icon="help-circle-outline" />
            </View>

            <View style={[styles.container, tailwind("mt-2")]}>
                <Button text="Logout" icon="exit-outline" />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    subHeader: {
        fontFamily: "Poppins-SemiBold",
        marginBottom: 10,
        marginTop: 10,
        color: '#9999AA'
    },
    container: {
        width: "80%"
    },
    text: {
        color: '#9999AA',
        fontFamily: 'Poppins-Normal'
    },
    individualRow: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default SettingsScreen;