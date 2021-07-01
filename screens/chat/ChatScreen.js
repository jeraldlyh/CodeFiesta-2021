import React, { useState, useEffect, useContext } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import firebase from "../../database/firebaseDB";
import { AuthContext } from "../../provider/AuthProvider";
import { Divider } from 'react-native-elements';
import Loading from '../../components/Loading';

const ChatScreen = ({ navigation }) => {
    const { username, avatar } = useContext(AuthContext);
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("Threads")
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

    return (
        loading
            ? <Loading />
            : <View>
                <FlatList
                    data={threads}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={() => <Divider orientation="horizontal" />}
                    renderItem={({ item }) => {
                        return (
                            <List.Item
                                title={item.userOne !== username ? item.userOne : item.userTwo}
                                description="test description"
                                titleStyle={styles.title}
                                titleNumberOfLines={1}
                                descriptionStyle={styles.description}
                                descriptionNumberOfLines={1}
                                left={() => <Image source={{ uri: 'https://picsum.photos/700' }} style={{ width: 60, height: 60, borderRadius: 100 }} />}
                                right={() => <List.Icon icon="chevron-right" />}
                                onPress={() => navigation.navigate("Room", {
                                    thread: item._id,
                                    username: username,
                                    avatar: avatar,
                                    anotherUser: item.userOne === username ? item.userTwo : item.userOne
                                })}
                            />
                        )
                    }}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
    },
})

export default ChatScreen;
