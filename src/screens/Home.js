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
                <Text>Anasayfa</Text>
                <Button
                    title="Hakkında Sayfasına Git"
                    onPress={() => this.props.navigation.navigate("Hakkında")}
                />
                <FlatList
                    data={data}
                    numColumns = {5}
                    keyExtreactor = {(item) => item.id.toString()}
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
});

export default Home;