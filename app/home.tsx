import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            {/* Price Display */}
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$ 32,000</Text>
            </View>

            {/* Buttons in one line */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#000000',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    priceContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 10,
        alignSelf: "center"
    },
    priceText: {
        fontSize: 45,
        color: "#ffffff"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        flex: 1,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Home;
