import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Container = View;
const TextLogo = Text;

//AppBar bizim için header görevi görecek bir bileşen
const AppBar = () => {

    return(
        <Container style={styles.container}>
        <TextLogo style={styles.textlogo}>
            StajİlanApp
        </TextLogo>
        </Container>
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
        backgroundColor: '#fff',
    },
    textlogo: {
        fontWeight: 'bold',
        color: '#3a86e9',
        fontSize: 30,
    }
})

export default AppBar;
