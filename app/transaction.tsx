import React from 'react';
import {Text, View} from 'react-native';

const transaction = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{
                fontSize: 25,
            }}>Transaction...!</Text>
        </View>
    );
};

export default transaction;