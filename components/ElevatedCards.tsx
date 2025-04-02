import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function ElevatedCards() {
    return (
        <View >
            <Text style={styles.textFlash}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>!!</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textFlash: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 4
    },
    cardElevated: {
        backgroundColor: "#cad5e2",
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: "#ef5354",
        shadowOpacity: 0.5
    }
})
