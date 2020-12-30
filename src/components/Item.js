import React from "react";
import {Text, View,Image,StyleSheet} from "react-native";
import Avatar from "./CompanyAvatar";

const Container = View;
const Header = View;
const Row = View;

const Item = ({item}) =>{
    return(
    <Container>
        <Header>
            <Row>
                <Text>{item.title}</Text>
                <Avatar source={item.image}/>
            </Row>
        </Header>
    </Container>
    )
};


export default Item;