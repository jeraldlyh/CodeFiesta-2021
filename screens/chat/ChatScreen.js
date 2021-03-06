import React, { useState, useEffect, useContext } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import firebase from "../../database/firebaseDB";
import { AuthContext } from "../../provider/AuthProvider";
import { Divider } from 'react-native-elements';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import tailwind from "tailwind-rn";
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';

const ChatScreen = ({ navigation }) => {
    const { username } = useContext(AuthContext);
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("Threads")
            .orderBy("latestMessage.createdAt", "desc")
            .onSnapshot(collection => {
                const userConvo = [];

                collection.forEach(doc => {
                    const message = doc.data();
                    message._id = doc.id;
                    if (message.userOne === username || message.userTwo === username) {
                        userConvo.push(message);
                    }
                })
                setThreads(userConvo);

                if (loading) {
                    setLoading(false);
                }
            })
        return () => unsubscribe();
    }, []);

    const getUserAvatar = (item) => {
        return item.userOne === username ? item.userOneAvatar : item.userTwoAvatar;
    };

    const getAnotherUser = (item) => {
        return item.userOne === username ? item.userTwo : item.userOne;
    };

    const getAnotherUserAvatar = (item) => {
        return item.userOne === username ? item.userTwoAvatar : item.userOneAvatar;
    };

    const formatDescription = (message) => {
        var parsedMessage = message.text;
        const timeAgo = moment(message.createAt).fromNow();

        if (parsedMessage.length > 12) {
            return parsedMessage.substr(0, 12) + "...\t\t" + timeAgo;
        }
        return parsedMessage + "\t\t\t" + timeAgo;
    };

    return (
        loading
            ? <Loading />
            : <View style={tailwind("p-2 px-6 h-full")}>
                <Header title="Chats" />
                {
                    threads
                        ? <FlatList
                            data={threads}
                            keyExtractor={item => item._id}
                            ItemSeparatorComponent={() => <Divider orientation="horizontal" />}
                            renderItem={({ item }) => {
                                return (
                                    <List.Item
                                        title={item.userOne !== username ? item.userOne : item.userTwo}
                                        description={formatDescription(item.latestMessage)}
                                        titleStyle={styles.title}
                                        titleNumberOfLines={1}
                                        descriptionStyle={styles.description}
                                        descriptionNumberOfLines={1}
                                        left={() => <Image source={{ uri: getAnotherUserAvatar(item) }} style={styles.left} />}
                                        right={() => <List.Icon icon="chevron-right" style={styles.right} />}
                                        onPress={() => navigation.navigate("Room", {
                                            thread: item._id,
                                            username: username,
                                            avatar: getUserAvatar(item),
                                            anotherUser: getAnotherUser(item),
                                            anotherUserAvatar: getAnotherUserAvatar(item)
                                        })}
                                    />
                                )
                            }}
                        />
                        : <TouchableOpacity onPress={() => console.log("navigate to community stack")}><Text style={styles.title}>You currently have no friends! Time to meet some ????</Text></TouchableOpacity>
                }
            </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
    },
    left: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 5
    },
    right: {
        marginRight: -5
    }
})

export default ChatScreen;
