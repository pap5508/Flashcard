import React from 'react'
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'

export default function ActionCard() {
    function openWebSite(webSiteLink: string) {
        Linking.openURL(webSiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text>What's new in Javascript</Text>
                </View>
                <Image source={{ uri: "https://images.unsplash.com/photo-1741936428950-3f66f0a69320?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>JavaScript is a programming language used to create dynamic content for websites. It achieves this by adding new HTML elements while modifying existing ones. Many coders enhance web development skills using JavaScript to create user-friendly and interactive websites.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebSite('https://www.w3schools.com/JS/js_intro.asp')}>
                        <Text style={styles.readmoreText}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebSite('https://www.w3schools.com/JS/js_intro.asp')}>
                        <Text style={styles.readmoreText}>Follow more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: "#E07c24",
        elevation: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: '#333',
        shadowOpacity: 0.3
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cardImage: {
        height: 300,
        marginBottom: 8,
        borderRadius: 6,
    },

    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    readmoreText: {
        fontSize: 16,
        color: "blue",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    }
})
