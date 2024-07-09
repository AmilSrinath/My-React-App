import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TransactionHistory from "@/components/TransactionHistory";
import SceneView from "@react-navigation/core/src/SceneView";

const transaction = () => {
    return (
        <View>

            <TextInput keyboardType={"numeric"} placeholder="10.00" style={{
                fontSize: 16,
                width: "100%",
                textAlign: 'center',
                backgroundColor: 'white',
                marginHorizontal: 'auto',
                height: 100,
                fontSize: 50,
            }}/>

            <View style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 10
            }}>
                <Text>To</Text>
                <TextInput keyboardType={"numeric"} placeholder="Bank number" style={{
                    fontSize: 16,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>

            <Text style={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
                fontSize: 20,
            }}>History</Text>

            <ScrollView>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
                <TransactionHistory/>
            </ScrollView>

        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 100,
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});



export default transaction;