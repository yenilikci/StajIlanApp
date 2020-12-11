import React from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import AppBar from './components/AppBar';

const Container = SafeAreaView;

const App = () => {
  return (
    <>
    <StatusBar/>
    <Container>
    <AppBar/>
    </Container>
    </>
  );
}


export default App;