import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import Accordion from 'react-native-collapsible/Accordion';


const SECTIONS = [
    {
        title: "First",
        content: "lorem ipsum",
    },
    {
        title: "Second",
        content: "lorem ipsum",
    },
];

function VisaTypeScreen({ navigation }) {
    const [activeSections, setSections] = useState([]);

    const _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _updateSections = (activeSections) => {
        setSections(activeSections);
    };

    return (
        <View style={tailwind("flex flex-col p-10")}>
            <Text style={[styles.title, tailwind("text-2xl text-left mt-5")]}>There are the work visa to migrate to Singapore</Text>
            <Text style={[styles.content, tailwind("text-xl text-gray-500 text-left mt-3")]}>Click to find out more</Text>
            <View style={tailwind("mt-6")} />
            <Accordion
                sections={SECTIONS}
                activeSections={activeSections}
                renderSectionTitle={_renderSectionTitle}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold",
    }
})

export default VisaTypeScreen;