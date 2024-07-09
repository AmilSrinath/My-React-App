import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const AlartComponent = () => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            width: '90%',
            height: '8%',
            marginTop:8,
            marginBottom:8,
            backgroundColor: '#ced4da',
            marginHorizontal: 'auto'
        }}>
            <Text style={{
                fontSize: 20,
                margin:5,
            }}>Date: 15.02.2024</Text>
            <Text style={{
                fontSize: 15,
                textAlign: 'left',
                marginLeft: 7,
            }}>To: 123456789</Text>
            <Text style={{
                fontSize: 20,
                textAlign: 'right',
                flex: 2,
                marginRight: 7,
            }}>$ 10.00</Text>
        </TouchableOpacity>
    );
};

export default AlartComponent;