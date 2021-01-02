import React from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Container = View;
const TextLogo = Text;

//AppBar bizim için header görevi görecek bir bileşen
const AppBar = () => {

    return(
        <>
            <Container style={styles.container}>
                <TextLogo style={styles.textlogo}>
                    StajİlanApp
                </TextLogo>
            </Container>
        </>
    )

}

//AppBar Stilleri
const styles = StyleSheet.create({
    container: {
        height: 58,
        paddingVertical: 0,
        paddingHorizontal: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a86e9',
    },
    textlogo: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,
    }
})

export default AppBar;
