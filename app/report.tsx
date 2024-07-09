import React from 'react';
import {Text, View} from 'react-native';

const report = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{
                fontSize: 25,
            }}>Report...!</Text>
        </View>
    );
};

export default report;