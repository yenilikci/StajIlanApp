import React from "react";
import { View, Button, Text, StyleSheet,FlatList,SafeAreaView,StatusBar } from "react-native";
import axios from 'axios';
import Item from "../components/Item";
import AppBar from "../components/AppBar";

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
            <>
                <StatusBar/>
            <View style={{flex:1}}>
                <AppBar/>
                    <FlatList
                        data={data}
                        keyExtreactor = {(item) => item.toString()}
                        renderItem={this._renderİtem}
                    />
            </View>
        </>
        );
    }
}


export default Home;