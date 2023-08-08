import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const AICamera = ({ route, navigation }) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const { width } = useWindowDimensions();
    const height = Math.round((width * 16) / 9);

    useEffect(() => {
        console.log(route.params.AIType);
        requestPermission();
    }, []);

    const takePhoto = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            console.log('Photo taken:', photo);
        }
    };

    useEffect(() => {
        console.log('Flash:', flash);
    }, [flash]);

    const toggleFlash = () => {
        setFlash(
            flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        );
    };

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    if (permission === null) {
        return <View />;
    }

    if (permission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cameraWrapper}>
                <View style={styles.actionHeaderWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {/* close camera */}
                        <Ionicons name="close" size={32} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleFlash}>
                        {/* flash */}
                        <Ionicons
                            name={
                                flash === Camera.Constants.FlashMode.off
                                    ? 'flash-off'
                                    : 'flash'
                            }
                            size={32}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <Camera
                    style={{ ...styles.camera, width: '100%', height }}
                    ratio="16:9"
                    ref={(ref) => setCameraRef(ref)}
                    autoFocus={Camera.Constants.AutoFocus.on}
                    flashMode={flash}
                    type={type}
                />
            </View>

            <View style={styles.actionBottomWrapper}>
                <TouchableOpacity>
                    {/* gallery */}
                    <Ionicons name="images" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                    <Ionicons name="camera" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraType}>
                    {/* switch camera type */}
                    <Ionicons name="camera-reverse" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    cameraWrapper: {
        flex: 0.86,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    actionHeaderWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 20,
        left: 0,
        zIndex: 1,
    },
    actionBottomWrapper: {
        flex: 0.14,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#3498db',
        borderRadius: 50,
        padding: 15,
    },
});

export default AICamera;
