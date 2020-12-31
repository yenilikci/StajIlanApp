import React from "react";
import {Text, View,Image,StyleSheet} from "react-native";
import Avatar from "./CompanyAvatar";

const Container = View;
const Header = View;

const Item = ({item}) =>{
    return(
    <Container style={styles.container}>
        <Header style={styles.header}>
            <Avatar source={item.image}/>
                <View style={styles.left}>
                    <Text style={styles.companyName}>{item.title}</Text>
                    <Text style={styles.dateTime}>5 gün önce eklendi</Text>
                </View>
        </Header>
    </Container>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#272643',
        borderRadius: 5,
        borderTopWidth: 5,
        borderColor: '#BAE8E8',
        margin: 10
    },
    header:{
        height: 80,
        flexDirection: 'row',
        marginVertical: 5,
        marginTop: 15,
        paddingHorizontal: 15
    },
    left: {
        paddingLeft: 15
    },
    companyName: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },
    dateTime: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#B3B3B3'
    }
})

export default Item;