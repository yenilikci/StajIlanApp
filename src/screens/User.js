import React, {Component} from "react";
import {View,Text,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import * as firebase from "firebase";

const {width,height} = Dimensions.get('window');

export default class User extends Component {

    state = {
        email: '',
        password: '',
        login: false
    }

    componentDidMount = () => {
        var firebaseConfig = {
            apiKey: "AIzaSyD2JMsbLI9gbOFBOc7ldZ6J18p5iQDElRQ",
            authDomain: "stajilan-12e4b.firebaseapp.com",
            projectId: "stajilan-12e4b",
            storageBucket: "stajilan-12e4b.appspot.com",
            messagingSenderId: "148914280748",
            appId: "1:148914280748:web:6240847803a4911f683489",
            measurementId: "G-1R2RC1HP79"
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
    }

    kayitol = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
    }

    giris = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                    placeholder="Email Adresi"
                    style={{
                        marginTop: 10,
                        width: width - 40,
                        padding: 10,
                        fontSize: 12,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 5
                    }}
                    underlineColorAndroid='transparent'
                    onChangeText={email => this.setState({email: email})}
                    value={this.state.email}
                    placeholderTextColor='gray'
                />
                <TextInput
                    placeholder="Şifre"
                    style={{
                        marginTop: 10,
                        width: width - 40,
                        padding: 10,
                        fontSize: 12,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 5
                    }}
                    underlineColorAndroid='transparent'
                    onChangeText={password => this.setState({password: password})}
                    value={this.state.password}
                    secureTextEntry
                    placeholderTextColor='gray'
                />
                <TouchableOpacity onPress={() => this.kayitol()}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#3a86e9',
                        width: width - 40,
                        padding: 15,
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <Text style={{color: '#fff', fontSize: 12}}>Kayıt Ol</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.giris()}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#3a86e9',
                        width: width - 40,
                        padding: 15,
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <Text style={{color: '#fff', fontSize: 12}}>Giriş Yap</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

