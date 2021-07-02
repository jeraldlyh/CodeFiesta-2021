import React, { useState, useEffect, Fragment, useContext } from "react";
import { View, Animated, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import tailwind from "tailwind-rn";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { getRandomQuiz } from "../../database/actions/Quiz";
import Loading from "../../components/Loading";
import _ from "lodash";
import { AuthContext } from "../../provider/AuthProvider";
import { addPointsToUser } from "../../database/actions/User";
import { BlurView } from "expo-blur";
import ConfettiCannon from "react-native-confetti-cannon";

function QuizScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayCorrect, setDisplayCorrect] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [question, setQuestion] = useState(null);
    const { username } = useContext(AuthContext);

    useEffect(() => {
        getRandomQuiz().then(result => {
            setQuestion(result)
        });
    }, []);

    const isActive = (index) => {
        return activeIndex === index;
    };

    const confirmButton = () => {
        setDisplayCorrect(false);
        setDisplayError(false);
        navigation.goBack();
    };

    const evaluateAnswer = () => {
        if (activeIndex === question.answer) {
            setDisplayCorrect(true);
            addPointsToUser(75, username);          // Constant 75 points per correct answer
        } else {
            setDisplayError(true);
        }
    };

    const onComplete = () => {
        evaluateAnswer();
        return [false, 0];
    };

    const submitButton = () => {
        setIsPlaying(false);
        evaluateAnswer();
    };

    return (
        <Fragment>
            {/* Modal Box */}
            {
                displayCorrect
                    ? <BlurView intensity={95} style={[tailwind("items-center justify-center"), { height: "100%", position: 'absolute', width: "100%", zIndex: 100 }]}>
                        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
                        <View style={tailwind("flex flex-col items-center justify-center h-56 w-56 bg-white rounded-xl")}>
                            <Text style={[styles.title, tailwind("text-center mb-1 text-xl")]}>Congralutations!</Text>
                            <Text style={[styles.title, tailwind("text-center text-lg mb-3")]}>+75 points</Text>
                            <Text style={[styles.description, tailwind("text-center mb-3")]}>You got the correct answer!</Text>
                            <TouchableOpacity style={styles.button} onPress={confirmButton}>
                                <Text style={styles.buttonText}>Exit Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                    : null
            }
            {
                displayError
                    ? <BlurView intensity={95} style={[tailwind("items-center justify-center"), { height: "100%", position: 'absolute', width: "100%", zIndex: 100 }]}>
                        <View style={tailwind("flex flex-col items-center justify-center h-56 w-56 bg-white rounded-xl")}>
                            <Text style={[styles.title, tailwind("text-center mb-1 text-xl")]}>Oh no!</Text>
                            <Text style={[styles.description, tailwind("text-center mb-3")]}>You didn't managed to get the correct answer! 😐</Text>
                            <TouchableOpacity style={styles.button} onPress={confirmButton}>
                                <Text style={styles.buttonText}>Exit Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                    : null
            }

            <Layout>
                <Header />
                {
                    question
                        ?
                        <Fragment>
                            <Text style={[styles.title, tailwind("text-2xl mb-4")]}>{question.question}</Text>
                            <View>
                                <CountdownCircleTimer
                                    strokeWidth={20}
                                    isPlaying={isPlaying}
                                    duration={5}
                                    colors={[
                                        ['#004777', 0.4],
                                        ['#F7B801', 0.4],
                                        ['#A30000', 0.2],
                                    ]}
                                    onComplete={onComplete}
                                >
                                    {({ remainingTime, animatedColor }) => (
                                        <Animated.Text style={[{ color: animatedColor }, tailwind("text-3xl"), styles.description]}>
                                            {remainingTime}
                                        </Animated.Text>
                                    )}
                                </CountdownCircleTimer>
                            </View>

                            <View style={tailwind("flex flex-col items-center justify-center w-96")}>
                                <View style={tailwind("h-3 mt-5")} />
                                {
                                    _.toArray(question.options).map((question, index) => {
                                        const buttonHeight = question.length > 39 ? 20 : 16
                                        return (
                                            <Button key={index} onPress={() => setActiveIndex(index + 1)} text={question} backgroundColor={isActive(index + 1) ? "#FE904B" : "#e3e3e3"} textColor={isActive(index + 1) ? "#FFF" : "#000"} height={buttonHeight} />
                                        )
                                    })
                                }
                            </View>

                            <View style={tailwind("mt-5")}>
                                <TouchableOpacity style={styles.button} onPress={submitButton}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                        : <Loading />
                }
            </Layout>
        </Fragment>
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