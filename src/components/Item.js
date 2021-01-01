import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import Avatar from "./CompanyAvatar";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Container = View;
const Header = View;
const Post = View;
const Button = TouchableOpacity;
const Icon = View;
const Footer = View;

const Item = ({item}) =>{
    return(
    <Container style={styles.container}>
        <Header style={styles.header}>
            <Avatar source={item.image}/>
                <View style={styles.left}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.dateTime}>5 gün önce eklendi</Text>
                </View>
        </Header>
        <Post style={styles.post}>
            <Text style={styles.descriptionText}>
                {item.description}
            </Text>
        </Post>
        <Footer style={styles.footer}>
            <Button style={styles.buttonLocation}>
                <Icon style={styles.icon}>
                    <MaterialCommunityIcons
                        name='map-marker'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text style={styles.iconText}>{item.location}</Text>
            </Button>
            <Button style={styles.buttonCompany}>
                <Icon style={styles.icon}>
                    <MaterialCommunityIcons
                        name='domain'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text style={styles.iconText}>{item.companyname}</Text>
            </Button>
            <Button style={styles.buttonCategory}>
                <Icon style={styles.icon}>
                    <MaterialCommunityIcons
                        name='shape'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text style={styles.iconText}>{item.categoryname}</Text>
            </Button>
        </Footer>

    </Container>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#272643',
        borderRadius: 10,
        borderTopWidth: 5,
        borderColor: '#BAE8E8',
        margin: 10
    },
    header:{
        borderRadius: 10,
        height: 80,
        flexDirection: 'row',
        marginTop: 15,
        paddingHorizontal: 15
    },
    post : {
        backgroundColor: '#3a86e9',
        height: 100,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 15,
        padding: 10
    },
    footer: {
        backgroundColor: '#BAE8E8',
        borderBottomEndRadius: 10,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    left: {
        paddingLeft: 15
    },
    title: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    dateTime: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#B3B3B3'
    },
    descriptionText : {
        fontSize: 16,
        color: "#fff",
        fontFamily:'monospace',
        fontWeight: 'bold'
    },
    buttonLocation:{
        flexDirection: 'row',
        backgroundColor: '#FFE7C2',
        padding: 10,
        borderRadius: 10
    },
    buttonCompany: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: '#F4B9B8',
        padding: 10,
        borderRadius: 10
    },
    buttonCategory: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: '#C2C2FF',
        padding: 10,
        borderRadius: 10
    },
    icon:{
        marginRight: 3
    },
    iconText:{
        marginTop: 2
    }
})

export default Item;