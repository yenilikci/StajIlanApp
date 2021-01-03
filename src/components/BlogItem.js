import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import Divider from "./Divider";

const Container = View;
const Header = View;
const Post = View;
const Button = TouchableOpacity;
const Icon = View;
const Footer = View;

const BlogItem = ({item}) =>{

    return(
        <Container style={styles.container}>
            <Header style={styles.header}>
                <View style={styles.left}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </Header>
            <Post style={styles.post}>
                <Text style={styles.descriptionText}>
                    {item.description}
                </Text>
            </Post>
            <Divider/>
        </Container>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#88D9E6',
        margin: 10
    },
    header:{
        height: 50,
        flexDirection: 'row',
        marginTop: 5,
        paddingHorizontal: 5
    },
    post : {
        backgroundColor: '#3a86e9',
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 15,
        padding: 10
    },
    left: {
        paddingLeft: 15
    },
    title: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    descriptionText : {
        fontSize: 16,
        color: "#fff",
        fontFamily:'monospace',
        fontWeight: 'bold'
    }
})
export default BlogItem;

