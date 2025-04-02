import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Parth Patel',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 2,
            name: 'Patrik Patel',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 3,
            name: 'Tarek Sbouai',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 4,
            name: 'Marks Müller',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={styles.userImage} />
                        <View >
                            <Text style={styles.userName}>{name}                       </Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 700,
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 5
    },
    userCard: {
        flex: 1,
        flexDirection: "row", alignItems: "center",
        marginBottom: 5,
        backgroundColor: "#565",
        borderRadius: 10,
        padding: 5
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,

    },
    userName: {
        fontSize: 16,
        fontWeight: 500,
        color: "#000"
    }, userStatus: {
        fontSize: 12,
    }
})
