import React from "react";
import { View, Button, Text, StyleSheet,FlatList } from "react-native";
import axios from 'axios';
import Item from "../components/Item";

class Home extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }


    componentDidMount(){
        axios.get(`https://stajilan.com/api/ads/`)
            .then((res) => {
                this.setState({data:res.data})
            })
            .catch((e) => log(e))
    }

    _renderİtem = ({item}) => {
        return <Item item={item}/>
    }

    render() {
        const {data} = this.state;
        return (
            <View style={styles.center}>
                <FlatList
                    style={styles.flatlist}
                    data={data}
                    keyExtreactor = {(item) => item.id}
                    renderItem={this._renderİtem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    flatlist: {
        padding: 25,
    }
});

export default Home;