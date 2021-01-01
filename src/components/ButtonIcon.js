import React from "react";
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";
import {Entypo,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'

const Button = TouchableOpacity;
const Icon = View;
const Row = View;

const ButtonIcon = ({item}) => {
    return(
        <>
            <Row style={styles.row}>
        <Button>
            <Icon>
                <AntDesign
                    name='like2'
                    size={20}
                    color='#424040'
                />
            </Icon>
            <Text>{item.location}</Text>
        </Button>

    <Button>
        <Icon>
            <MaterialCommunityIcons
                name='comment-outline'
                size={20}
                color='#424040'
            />
        </Icon>
        <Text>{item.companyname}</Text>
    </Button>
            </Row>
    </>
    );
};

const styles = StyleSheet.create({
   button:{
    flexDirection: 'row'
   },
    icon:{
    marginRight: 6
    },
    row:{
       flexDirection: 'row'
    }
});

export default ButtonIcon;