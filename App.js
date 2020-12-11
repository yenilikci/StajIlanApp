import React from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import AppBar from './components/AppBar';
import Divider from './components/Divider';

const Container = SafeAreaView;

const App = () => {
  return (
    <>
    <StatusBar/>
    <Container>
    <AppBar/>
    <Divider/>
    </Container>
    </>
  );
}


export default App;