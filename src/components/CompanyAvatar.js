import React from "react";
import {View,StyleSheet,Image} from "react-native";

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
        width: 100,
        height: 100,
        position: 'relative'
    },
    company: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#1777f2',
        borderWidth: 2
    }
})

export default Avatar;