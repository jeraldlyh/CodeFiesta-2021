import React, { useState, useEffect } from "react";
import { View, Animated, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Overlay } from "react-native-elements";
import tailwind from "tailwind-rn";
import Button from "../components/Button";



function QuizScreen(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(true);
    const [visible, setVisible] = useState(false);

    const isActive = (index) => {
        return activeIndex === index;
    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 10000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <View style={tailwind("flex flex-col items-center justify-center mt-20")}>
            {
                correctAnswer
                    ? <Overlay isVisible={visible} onBackdropPress={toggleOverlay} backdropStyle={tailwind("opacity-75 bg-black")}>
                        <View style={tailwind("flex flex-col items-center justify-center h-48 w-48")}>
                            <Text style={[styles.title, tailwind("text-center mb-1 text-xl")]}>Congralutations!</Text>
                            <Text style={[styles.title, tailwind("text-center text-xl mb-3")]}>+75 points</Text>
                            <Text style={[styles.description, tailwind("text-center mb-3")]}>You got the correct answer!</Text>
                            <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </Overlay>
                    : null
            }
            <Text style={[styles.title, tailwind("text-2xl mb-4")]}>What does a packet of tissue paper represent?</Text>
            <View>
                <CountdownCircleTimer
                    strokeWidth={20}
                    isPlaying
                    duration={10}
                    colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                    ]}
                >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={[{ color: animatedColor }, tailwind("text-3xl"), styles.description]}>
                            {remainingTime}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>
            </View>

            <View style={tailwind("h-3 mt-5")} />
            <Button onPress={() => setActiveIndex(1)} text="It's free! Take it and go!" backgroundColor={isActive(1) ? "#FE904B" : "#e3e3e3"} textColor={isActive(1) ? "#FFF" : "#000"} />
            <View style={tailwind("h-3")} />
            <Button onPress={() => setActiveIndex(2)} text="Oh no, the table is occupied! 😥" backgroundColor={isActive(2) ? "#FE904B" : "#e3e3e3"} textColor={isActive(2) ? "#FFF" : "#000"} />
            <View style={tailwind("h-3")} />
            <Button onPress={() => setActiveIndex(3)} text="Someone forgot to take it..." backgroundColor={isActive(3) ? "#FE904B" : "#e3e3e3"} textColor={isActive(3) ? "#FFF" : "#000"} />

            <View style={tailwind("mt-5")}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push("Visa")}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    description: {
        fontFamily: "Poppins-Normal"
    },
    title: {
        fontFamily: "Poppins-Bold"
    },
    button: {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 22,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 15 },
        backgroundColor: '#FE904B',
        width: 100,
    },
    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        textAlign: "center"
    },
})

export default QuizScreen;