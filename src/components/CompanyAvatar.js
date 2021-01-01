import React from "react";
import {View,StyleSheet,Image} from "react-native";
import {Entypo,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'

const Container = View;
const Company = Image;

const Avatar = ({source}) => {
    return(
        <Container style={styles.container}>
            <Company style={styles.company}
                     source={{
                         uri: source
                     }}/>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        position: 'relative'
    },
    company: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: '#ddd',
        borderWidth: 2
    }
})

export default Avatar;