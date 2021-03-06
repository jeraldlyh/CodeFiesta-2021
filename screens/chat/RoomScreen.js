import React, { useEffect, useState, Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GiftedChat, Bubble, Send, SystemMessage, Time, InputToolbar } from 'react-native-gifted-chat';
import firebase from "../../database/firebaseDB";
import Filter from "bad-words";
import { IconButton } from "react-native-paper";
import Loading from "../../components/Loading";
import ChatHeader from "./components/ChatHeader";
import { Icon } from "react-native-elements";
import tailwind from "tailwind-rn";

function RoomScreen({ route, navigation }) {
    const [messages, setMessage] = useState([]);
    const { thread, username, avatar, anotherUser, anotherUserAvatar } = route.params;
    const filter = new Filter();

    const onPressed = () => {
        navigation.goBack();
    };

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("Threads")
            .doc(thread)
            .collection("messages")
            .orderBy("createdAt", "desc")
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => {
                    const messageData = doc.data();

                    const data = {
                        _id: doc.id,
                        text: "",
                        createdAt: new Date().getTime(),
                        ...messageData
                    };

                    if (!messageData.system) {
                        data.user = {
                            ...messageData.user,
                            avatar: messageData.user.avatar
                        };
                    }

                    return data;
                });
                setMessage(messages);
            })
        return () => unsubscribe();
    }, [])

    async function handleSend(messages) {
        var text = messages[0].text;
        text = filter.clean(text);

        firebase.firestore().collection("Threads")
            .doc(thread)
            .collection("messages")
            .add({
                text: text,
                createdAt: new Date().getTime(),
                user: {
                    _id: username,
                    avatar: avatar,
                }
            });

        firebase.firestore().collection("Threads")
            .doc(thread)
            .set({
                latestMessage: {
                    text: text,
                    createdAt: new Date().getTime()
                }
            }, { merge: true });
    };

    function renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: "#ECEEF1"
                    },
                    right: {
                        backgroundColor: "#FB724C"
                    }
                }}
                textStyle={{
                    left: {
                        color: "#000",
                        fontFamily: "Poppins-Normal"
                    },
                    right: {
                        color: "#fff",
                        fontFamily: "Poppins-Normal"
                    }
                }}
            />
        );
    };

    function renderTime(props) {
        return (
            <Time
                {...props}
                timeTextStyle={{
                    left: {
                        color: "#000",
                        fontFamily: "Poppins-Normal"
                    },
                    right: {
                        color: "#fff",
                        fontFamily: "Poppins-Normal"
                    },
                }}
            />
        );
    }

    function renderSend(props) {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <IconButton icon="send-circle" size={32} color="#fa3c4c" />
                </View>
            </Send>
        );
    };

    function renderInputToolbar(props) {
        return (
            <InputToolbar {...props} textInputStyle={{ fontFamily: "Poppins-Normal", fontSize: 14 }} placeholder="Type your message here..."
            />
        )
    }

    function scrollToBottomComponent() {
        return (
            <View style={styles.bottomComponentContainer}>
                <IconButton icon="chevron-double-down" size={36} color="#fa3c4c" />
            </View>
        );
    }

    function renderSystemMessage(props) {
        return (
            <View style={styles.systemContainer}>
                <View style={styles.systemMessageWrapper}>
                    <Text style={styles.systemMessageText}>{props.currentMessage.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <Fragment>
            <ChatHeader user={anotherUser} image={anotherUserAvatar} onPressed={onPressed} />
            <GiftedChat
                messages={messages}
                onSend={handleSend}
                user={{ _id: username }}
                alwaysShowSend
                showUserAvatar
                scrollToBottom
                bottomOffset={77}
                renderActions={() => <Icon size={23} name="add-circle" style={tailwind("mb-3 ml-2")} />}
                renderInputToolbar={renderInputToolbar}
                renderBubble={renderBubble}
                renderLoading={Loading}
                renderSend={renderSend}
                renderTime={renderTime}
                renderSystemMessage={renderSystemMessage}
                scrollToBottomComponent={scrollToBottomComponent}
            />
        </Fragment>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    sendingContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    bottomComponentContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    systemMessageWrapper: {
        backgroundColor: "#d1d1d1",
        opacity: 0.8,
        borderRadius: 4,
        padding: 5,
        width: "80%",
        alignItems: 'center',
        justifyContent: "center"
    },
    systemMessageText: {
        fontSize: 14,
        textAlign: "center",
        color: "#000000",
        fontWeight: "bold",
        backgroundColor: "transparent",
        fontSize: 12,
        fontWeight: '300',
        paddingTop: 10,
        fontFamily: "Poppins-Normal"
    },
    systemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
        marginBottom: 10,
    }
});

export default RoomScreen;