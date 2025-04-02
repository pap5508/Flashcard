import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.textFlash}>FlashCard</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
            </View>
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
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        borderRadius: 12,
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: "#ef5354"
    }
})
