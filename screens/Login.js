import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextTitle from '../components/TextTitle';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryButtonOutline from '../components/PrimaryButtonOutline';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextTitle style={{ fontSize: 20, lineHeight: 26 }}>
                    Selamat datang di
                </TextTitle>
                <TextTitle>Mediku</TextTitle>
            </View>
            <Image
                source={require('../assets/images/auth-onboarding.png')}
                style={[styles.image, { resizeMode: 'contain' }]}
            />
            <View style={styles.footer}>
                <PrimaryButton marginBottom={16}>Daftar</PrimaryButton>
                <PrimaryButtonOutline>Masuk</PrimaryButtonOutline>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.8,
        justifyContent: 'center',
        marginBottom: 46,
    },
    footer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
