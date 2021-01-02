import React from 'react';
import {View,StyleSheet} from 'react-native';

const DividerLine = View;

//Divider bizim için ayırıcı bir çizgi olacak
const Divider = () => {

    return(
        <>
        <DividerLine style={styles.dividerline}/>
        </>
    )

}

//Divider Stilleri
const styles = StyleSheet.create({
    dividerline: {
        height: 3,
        backgroundColor: '#f0f2f5',
    }
})

export default Divider;