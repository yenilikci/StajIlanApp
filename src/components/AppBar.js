import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

const Container = View;
const TextLogo = Text;
const Button = TouchableOpacity;

//AppBar bizim için header görevi görecek bir bileşen
const AppBar = () => {
    const navigation = useNavigation();
    return(
        <>
            <Container style={styles.container}>
                <Button style={styles.button}>
                    <Feather
                        name="arrow-right"
                        size={29}
                        color="#3a86e9"
                    />
                </Button>
                <TextLogo style={styles.textlogo}>
                    StajİlanApp
                </TextLogo>
                <Button style={styles.button}
                        onPress = {() => navigation.navigate('Kullanici')}>
                    <Feather
                        name="user"
                        size={29}
                        color="#3a86e9"
                    />
                </Button>
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
        justifyContent: 'space-between',
        backgroundColor: '#3a86e9',
    },
    textlogo: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,
    },
    button:{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AppBar;
