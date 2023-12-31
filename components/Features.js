import { View, Text } from 'react-native';
import React from 'react';
import Menu from './Menu';

export default function Features() {
    return (
        <View
            style={{
                marginTop: 33,
                height: 136,
                width: '100%',
                marginBottom: 20,
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
                Fitur
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                }}
            >
                <Menu
                    image={require('../assets/images/menu/malnu.png')}
                    title="Diagnosa Malnutrisi"
                />
                <Menu
                    image={require('../assets/images/menu/nutrisen.png')}
                    title="Cek Nutrisi Harian"
                />
            </View>
        </View>
    );
}
