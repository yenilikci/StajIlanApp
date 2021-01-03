import React from "react";
import { View,FlatList,StatusBar } from "react-native";
import axios from 'axios';
import BlogItem from "../components/BlogItem";

class Blog extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }


    componentDidMount(){
        axios.get(`https://stajilan.com/api/blogs`)
            .then((res) => {
                this.setState({data:res.data})
            })
            .catch((e) => log(e))
    }

    _renderİtem = ({item}) => {
        return <BlogItem item={item}/>
    }

    render() {
        const {data} = this.state;
        return (
            <>
                <StatusBar/>
                <View style={{flex:1}}>
                    <FlatList
                        data={data}
                        keyExtractor = {(item,index) => String(index)}
                        renderItem={this._renderİtem}
                    />
                </View>
            </>
        );
    }
}


export default Blog;