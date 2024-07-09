import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const AlartComponent = () => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            width: '90%',
            height: '12%',
            marginTop:8,
            marginBottom:8,
            backgroundColor: '#ced4da',
            marginHorizontal: 'auto'
        }}>
            <Text style={{
                fontSize: 20,
                margin:5,
            }}>Alart</Text>
            <Text style={{
                fontSize: 15,
                marginHorizontal: 'auto',
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
        </TouchableOpacity>
    );
};

export default AlartComponent;