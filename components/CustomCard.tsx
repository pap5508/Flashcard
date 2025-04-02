import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function CustomCard() {
    return (
        <View >
            <Text style={styles.textFlash}>Trending Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}> Tesla Model Y</Text>
                    <Text style={styles.cardLabel}>Model Y</Text>

                    <Text style={styles.cardDescription}>Tesla is an American electric vehicle (EV) company known for its high-performance electric cars, SUVs, and pickup trucks, including models like the Model S, Model 3, Model X, and Cybertruck, which feature advanced technology and long driving ranges. </Text>
                    <Text style={styles.cardFooter}>380 miles</Text>
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
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    imageContainer: {
        justifyContent: "space-around"
    },
    cardElevated: {
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderRadius: 6,

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    cardTitle: {


        fontSize: 22,
        fontWeight: "700",
        marginBottom: 4
    },
    cardLabel: {
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        color: '#242b2E'
    },
    cardFooter: {

    }
})
